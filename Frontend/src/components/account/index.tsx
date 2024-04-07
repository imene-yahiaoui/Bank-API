/**
 * Account Component
 *
 * This component displays an account with its title, amount, and description.
 * It also provides a button to view transactions related to the account.
 *
 * @param {AccountProps} props - The props object containing the account details.
 * @param {string} props.title - The title of the account.
 * @param {string} props.amount - The amount associated with the account.
 * @param {string} props.description - The description of the account.
 *
 * @return {JSX.Element} JSX.Element representing the Account component.
 */

import "./style.css";

interface AccountProps {
  title: string;
  amount: string;
  description: string;
}

const Account: React.FC<AccountProps> = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
