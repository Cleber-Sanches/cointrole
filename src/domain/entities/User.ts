import { randomUUID } from 'node:crypto';

interface UserProps {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class User {
  public id: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public password?: string;
  public created_at: Date;
  public updated_at: Date;
  public deleted_at: Date;

  constructor(props: UserProps) {
    this.id = props.id ?? randomUUID();
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.email = props.email;
    this.password = props.password;
    this.created_at = props.created_at ?? new Date();
    this.updated_at = props.updated_at ?? new Date();
    this.deleted_at = props.deleted_at ?? new Date();
  }
}
