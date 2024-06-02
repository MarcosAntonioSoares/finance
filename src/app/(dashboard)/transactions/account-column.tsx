import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
  account: string;
  accountId: string;
};

export function AccountColumn({ account, accountId }: Props) {
  const { onOpen: onOpenAccount } = useOpenAccount();

  function onClick() {
    onOpenAccount(accountId);
  }

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
}
