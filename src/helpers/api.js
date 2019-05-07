import { mapValues } from 'lodash';
// const HOST = process.env.REACT_APP_SERVER

// Да, костыль... todo: убрать

const api_base = process.env.REACT_APP_SERVERAPI || 'https://dev.jazzpoolproject.com/back-api/';
const bot_base = process.env.REACT_APP_SERVERBOT || 'https://dev.goldjob.com/api/';

const createLinks = (links, base) => mapValues(links, link => `${base}${link}`);

export const api = createLinks(
	{
		ping: 'ping',

		profile: 'goldjob/user-data',
		team_mining: 'goldjob/team-mining',
		balance: 'balance/total',
		balance_total: 'balance/totalUSD',
		payments_stats: 'payments/stats',
		emailConfirmation: 'email-confirmation',

		coins: 'coins',
		coin_stats: 'coins/realtime',
		coin_graph: 'coins/stats',
		coin_blocks: 'coins/blocks',
		coin_calc: 'coins/calc',

		subaccounts: 'subaccounts',
		sub_details: 'subaccount/details',
		sub_stats_hash: 'subaccounts/all/stats',
		sub_stats: 'subaccounts/stats/periods',
		sub_payments_stats: 'subaccounts/payments/stats',
		sub_payments_all: 'subaccounts/all/payments/stats',
		sub_payments_all_coins: 'subaccount/payments/all',
		sub_create: 'subaccount/create',
		sub_edit: 'subaccount/edit',
		sub_validate: 'subaccount/check',

		workers: 'workers/fetch',
		workers_QTY: 'workers/count',
		workers_stats: 'workers/stats',

		notify_enable: 'activate-notifier-bot',
		notify_disable: 'deactivate-notifier-bot',

		house_wallet: 'house/get-wallet',
		house_balance: 'house/get-balance',
		house_txs: 'house/get-txs',
		house_containers_to_purchasing: 'house/get-containers-to-purchasing',
		house_containers: 'house/get-containers',
		house_purchasing_container: 'house/purchasing-container',
	},
	api_base
);

export const bot = createLinks(
	{
		login: 'user/login',
		loginToken: 'user/login',
		register: 'user/signup',
		resendEmail: 'resendEmailConfirmationToken',
		recover: 'requestPasswordReset',
		user: 'user',
		lastOrders: 'lastOrders',
		settings: 'settings',
		transactions: 'transactions',
		emailConfirmation: 'email-confirmation',
		newPass: 'requestPasswordReset',
		resetPassword: 'resetPassword',
		withdrawal: 'withdrawal',
		withdrawals: 'withdrawals',
		logout: 'logout',
	},
	bot_base
);

export const REsitekey = '6LftaTkUAAAAAF3fQaXpexWASwjUD5vdvcEf4aVM';
export const DOMAIN = 'http://app.goldjob.com';
