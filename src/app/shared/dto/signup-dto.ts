export class SignupDto {
  username: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  ssn: string;
  email: string;
  dob: string;
  state: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  cellPhone: string;
  homePhone?: string;
  cqas?: boolean;
  language: string;
  smsOptIn: boolean;
}
