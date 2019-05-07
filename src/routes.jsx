import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'redaction';

// import { Home } from 'pages';

import { MainLayout } from 'components/layouts';

const Routes = ({ isLoggedIn, match: { url } }) =>
	isLoggedIn ? (
		<MainLayout>
			<Switch>
				{/* <Route exact path="/" component={Home} />

        <Route exact path="/bot-dashboard" component={Bot.Dashboard} />
        <Route exact path="/bot-payments-history" component={Bot.Payments} />

        <Route exact path="/pool-stats" component={PoolStats} />
        <Route
          exact
          path="/partner-payments-history"
          component={PartnerPaymentsHistory}
        />
        <Route
          exact
          path="/mining-payments-history"
          component={MiningPaymentsHistory}
        />
        <Route exact path="/subaccounts" component={SubAccounts} />
        <Route exact path="/partner-dashboard" component={PartnerDashboard} />
        <Route exact path="/marketing-tools" component={MarketingTools} />
        <Route
          exact
          path="/connecting-instruction"
          component={ConnectingInstruction}
        />
        <Route exact path="/bot-info" component={BotInfo} />
        <Route exact path="/my-team" component={MyTeam} />
        <Route exact path="/merged-mining" component={MergedMining} />
        <Route exact path="/data-access" component={DataAccess} />
        <Route exact path="/miners-rating" component={MinersRating} />
        <Route exact path="/miners-rental" component={MinersRental} />
        <Route exact path="/partner-rewards" component={PartnerRewards} />
        <Route exact path="/partner-trainings" component={PartnerTrainings} />
        <Route exact path="/offices" component={Offices} />
        <Route exact path="/partner-rules" component={PartnerRules} />
        <Route exact path="/video-overview" component={VideoOverview} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/support-tickets" component={SupportTickets} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/mininghouse" component={MiningHouse} />

        {<Route exact path="/partner-confirm" component={PopUpConfirmPage} />}

        <Route
          exact
          path="/user/confirm-withdrawal/:confirmToken"
          component={Bot.Dashboard}
        />
        <Route exact path="/personal-data" component={Profile} />
        <Route exact path="/2fa" component={TwoFactor} />
        <Route exact path="/day-night" component={DayNight} />
        <Route exact path="/notification-settings" component={Settings} />
        <Route exact path="/sign-in-history" component={LogEntry} />
        <Route exact path="/user/logout" component={Auth.Logout} /> *}
        {/* <Route path="/404" component={Page404} /> */}
				{/* <Route path="*" component={NoMatch} /> */}
				<Redirect to={url} />
			</Switch>
		</MainLayout>
	) : (
		<Switch>
			<Route exact path="/*" render={() => 'Hello'} />
			{/* <Route exact path="/user/forgot-password" component={Auth.Restore} />
			<Route exact path="/user/reset-password/:resetToken" component={Auth.RestoreReset} />
			<Route exact path="/user/setup/email-confirmation" component={Auth.EmailConfirm} />
			<Route exact path="/user/setup/email-confirmation/:confirmCode" component={Auth.EmailConfirm} />
			<Route exact path="/user/setup/signup" component={Auth.AdditionalInfo} />

			<Route exact path="/user/signup" component={Auth.Reg} />
			<Route exact path="/user/login" component={Auth.Login} />
			<Route exact path="/user/logout" component={Auth.Logout} />
			<Route exact path="/*" component={Auth.Login} /> */}
		</Switch>
	);

export default connect({
	isLoggedIn: 'auth.isLoggedIn',
})(Routes);
