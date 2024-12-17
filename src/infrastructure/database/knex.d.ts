import { IAccountType } from '../../domain/interfaces/IAccountType';
import { ICategory } from '../../domain/interfaces/ICategory';
import { ICreditCard } from '../../domain/interfaces/ICreditCard';
import { ICreditCardPayment } from '../../domain/interfaces/ICreditCardPayment';
import { IFamilyMember } from '../../domain/interfaces/IFamilyMember';
import { IIcon } from '../../domain/interfaces/IIcon';
import { IMemberTag } from '../../domain/interfaces/IMemberTag';
import { IRecurrenceType } from '../../domain/interfaces/IRecurrenceType';
import { ITag } from '../../domain/interfaces/ITag';
import { ITransaction } from '../../domain/interfaces/ITransaction';
import { ITransactionPayment } from '../../domain/interfaces/ITransactionPayment';
import { IUser } from '../../domain/interfaces/IUser';

declare module 'knex/types/tables' {
  interface Tables {
    account_types: IAccountType;
    categories: ICategory;
    credit_cards: ICreditCard;
    credit_card_payments: ICreditCardPayment;
    family_members: IFamilyMember;
    icons: IIcon;
    member_tags: IMemberTag;
    recurrence_types: IRecurrenceType;
    tags: ITag;
    transactions: ITransaction;
    transactions_payment: ITransactionPayment;
    users: IUser;
  }
}
