export interface Transaction {
  amount: number;
  authorized_date: Date;
  category: string[];
  date: string;
  iso_currency_code: string;
  logo_url: string;
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

export interface Goal {
  category: string;
  amount: string;
  id: string;
}
