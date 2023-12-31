import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { FC, ReactNode, useContext } from "react";
import ThemeContext from "@/common/context/themeContext";
import useMounted from "@/common/hooks/useMounted";

interface IPortalProps {
  children: ReactNode;
  id?: string;
}
// @ts-ignore
const Portal: FC<IPortalProps> = ({ id = "portal-root", children }) => {
  const { fullScreenStatus } = useContext(ThemeContext);

  const { mounted } = useMounted();

  const mount =
    typeof document !== "undefined" &&
    typeof id !== "undefined" &&
    document.getElementById(id);
  if (mounted) {
    if (fullScreenStatus) return children;
    if (mount) return ReactDOM.createPortal(children, mount);
  }
  return null;
};
Portal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default Portal;
