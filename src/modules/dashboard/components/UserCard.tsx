import UserContact from "@/common/components/elements/UserContact";
import USERS from "@/common/data/userDummyData";
import { useRouter } from "next/navigation";

const DashboardUserCard = () => {
  const router = useRouter();

  return (
    <UserContact
      name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
      position="Team Lead"
      mail={`${USERS.SAM.username}@site.com`}
      phone="1234567"
      onChat={() => router.push(`../`)}
      src={USERS.SAM.src}
      color={USERS.SAM.color}
    />
  );
};

export default DashboardUserCard;
