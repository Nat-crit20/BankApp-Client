export interface Transaction {
  amount: number;
  authorized_date: Date;
  category: string[];
  date: Date;
  iso_currency_code: string;
  merchant_name: string;
  name: string;
  payment_channel: string;
  pending: boolean;
  personal_finance_category: {
    confidence_level: string;
    detailed: string;
    primary: string;
  };
  transaction_id: string;
  website: string;
}
