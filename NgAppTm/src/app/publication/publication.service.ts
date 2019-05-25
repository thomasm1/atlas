﻿import { Injectable } from '@angular/core';
import { IPublication } from './publication';

@Injectable()
export class PublicationService {
    getPublications(): IPublication[] {
        return [  
            {   code: 'emp101',
                name: 'Tom',
                gender: 'Male',
                annualSalary: 55000,
                dateOfBirth: '5/22/77' 
            },
            { code: 'emp101', name: 'Aa', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1933' },
            { code: 'emp102', name: 'Bb', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1979' },
            { code: 'emp103', name: 'Cc', gender: 'Female', annualSalary: 75000, dateOfBirth: '3/03/1988' },
            { code: 'emp104', name: 'Dd', gender: 'Male', annualSalary: 55000, dateOfBirth: '3/03/1936' },
            { code: 'emp105', name: 'Ee', gender: 'Female', annualSalary: 65000.88, dateOfBirth: '3/04/1977' }
        ];

    }
}

