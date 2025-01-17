import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './case-person-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { CaseDataDto, PersonDto } from '../../../_models/models';
import { PersonService } from '../../../_services/api/person.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-case-person',
  templateUrl: './case-person.component.html',
  styleUrls: ['./case-person.component.scss'],
})
export class CasePersonComponent {
  person: PersonDto;
  myFormElements: FormBase<any>[] = [];

  public resourceService: BaseService<any>;

  constructor(
    private formElementControlService: FormElementControlService,
    private personService: PersonService,
    private notificationService: NotificationService
  ) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    this.personService.getById(caseItem.person.uuid).subscribe({
      next: (response: any) => {
        this.person = response;
        this.resourceService = resourceService;
        this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
          this.person,
          data.FORM_DATA_CASE_PERSON_DETAILS
        );
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }
}
