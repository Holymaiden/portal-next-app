import React from "react";
import CommonHeader, {
  HeaderLeft,
} from "@/common/components/layouts/Header/Header";
import CommonHeaderChat from "@/common/components/layouts/Header/CommonHeaderChat";
import Search from "@/common/components/elements/Search";
import CommonHeaderRight from "@/common/components/layouts/Header/CommonHeaderRight";

const Header = () => {
  return (
    <CommonHeader>
      <HeaderLeft>
        <Search />
      </HeaderLeft>
      <CommonHeaderRight afterChildren={<CommonHeaderChat />} />
    </CommonHeader>
  );
};

export default Header;
