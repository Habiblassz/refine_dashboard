import {
	DashBoardTotalCountCard,
	DealsChart,
	LatestActivities,
	UpcomingEvents,
} from "@/components";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "@/graphql/queries";
import { DashboardTotalCountsQuery } from "@/graphql/types";
import { useCustom } from "@refinedev/core";
import { Col } from "antd";
import { Row } from "antd/lib";

export const Home = () => {
	const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
		url: "",
		method: "get",
		meta: {
			gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY,
		},
	});
	return (
		<div>
			<Row gutter={[32, 32]}>
				<Col xs={24} sm={24} xl={8}>
					<DashBoardTotalCountCard
						resource="companies"
						isLoading={isLoading}
						totalCount={data?.data.companies.totalCount}
					/>
				</Col>
				<Col xs={24} sm={24} xl={8}>
					<DashBoardTotalCountCard
						resource="contacts"
						isLoading={isLoading}
						totalCount={data?.data.contacts.totalCount}
					/>
				</Col>
				<Col xs={24} sm={24} xl={8}>
					<DashBoardTotalCountCard
						resource="deals"
						isLoading={isLoading}
						totalCount={data?.data.deals.totalCount}
					/>
				</Col>
			</Row>
			<Row
				gutter={[32, 32]}
				style={{
					marginTop: "32px",
				}}>
				<Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
					<UpcomingEvents />
				</Col>
				<Col xs={24} sm={24} xl={16} style={{ height: "460px" }}>
					<DealsChart />
				</Col>
			</Row>
			<Row
				gutter={[32, 32]}
				style={{
					marginTop: "32px",
				}}>
				<Col xs={24}>
					<LatestActivities />
				</Col>
			</Row>
		</div>
	);
};
