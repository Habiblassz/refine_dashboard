import { Layout, Space } from "antd";
import CurrentUser from "./current-user";
import React from "react";

const Header = () => {
	const headerStyles: React.CSSProperties = {
		backgroundColor: "#fff",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		padding: "0 24px",
		position: "sticky",
		top: 0,
		zIndex: 999,
	};
	return (
		<Layout.Header style={headerStyles}>
			<Space align="center" size="middle">
				<CurrentUser />
			</Space>
		</Layout.Header>
	);
};

export default Header;
