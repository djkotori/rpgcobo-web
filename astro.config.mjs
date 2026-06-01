// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeNova({
					nav:[
						{
							label: '機能紹介', translations: { 'en': 'Features' },
							href: '/features',
						},
						{
							label: 'ダウンロード', translations: { 'en': 'Download' },
							href: '/download',
						},
						{
							label: '価格設定', translations: { 'en': 'Pricing' },
							href: '/pricing',
						},
						{
							label: 'サンプルゲーム', translations: { 'en': 'Samples' },
							href: '/samples',
						},
						{
							label: 'ガイド', translations: { 'en': 'Documents' },
							href: '/guides/start',
						},
					],
				}), 
			],
			title: 'RPG-Cobo',
			logo: {
				src: './src/assets/logo_s.svg', replacesTitle: true,
			},
			customCss: [
				'./src/assets/style.css', 
				'./src/assets/pricelist.css', 
			],
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			defaultLocale: "ja",
			locales: {
				en: { label: "English" },
				ja: { label: "日本語" },
			},
			sidebar: [
				{
					label: 'ガイド', translations: { 'en': 'Guides' },
					items: [
						{ label: 'はじめに', translations: { 'en': 'About Guides' }, slug: 'guides/start' },
						{
							label: '準備しよう', translations: { 'en': 'Get Started' },
							autogenerate: { directory: 'guides/begin' },
						},
						{
							label: 'マップ', translations: { 'en': 'Example Guide' },
							autogenerate: { directory: 'guides/map' },
						},
						{
							label: 'イベント', translations: { 'en': 'Example Guide' },
							autogenerate: { directory: 'guides/event' },
						},
						{
							label: 'データベース', translations: { 'en': 'Example Guide' },
							autogenerate: { directory: 'guides/db' },
						},
						{
							label: 'ゲームの素材（リソース）', translations: { 'en': 'Example Guide' },
							autogenerate: { directory: 'guides/res' },
						},
						{
							label: 'ゲームを配布しよう', translations: { 'en': 'Example Guide' },
							autogenerate: { directory: 'guides/publish' },
						},
						{
							label: 'さらに使いこなそう', translations: { 'en': 'Example Guide' },
							autogenerate: { directory: 'guides/advance' },
						},
					],
				},
				{
					label: '困った時には', translations: { 'en': 'Get Started' },
					autogenerate: { directory: 'help' },
				},
				{
					label: '開発者の方向け', translations: { 'en': 'For Developers' },
					collapsed: true,
					items: [
						{ label: 'プラグインでゲームやツールの拡張をしよう', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
						{ label: '最も簡単なプラグイン', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
						{ label: 'sakana言語について', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
						{ label: 'RPG-Coboのシステム概要', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
						{ label: 'RPG-良く使うクラスや関数', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
						{
							label: 'プラグイン開発実践編', translations: { 'en': 'Example Guide' },
							items: [
								{ label: 'キャラのパラメータを追加する', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
								{ label: 'イベントコマンドを追加する', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
								{ label: 'UIを追加する', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
								{ label: '計算式や動作を変更する', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
								{ label: 'ツールを拡張する', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
								{ label: '色々な応用', translations: { 'en': 'Example Guide' }, slug: 'guides/notready' },
							]
						},
					]
				},
			],
			lastUpdated: true,
			// editLink: {
			// 	baseUrl: 'https://github.com/djkotori/rpgcobo-web/edit/main/',
			// },
			components: {
				ContentPanel: './src/components/CustomContentPanel.astro',
				PageTitle: './src/components/CustomPageTitle.astro',
				Footer: './src/components/CustomFooter.astro',
				MobileTableOfContents: './src/components/CustomMobileTableOfContents.astro',
				Header: './src/components/CustomHeader.astro',
				// PageSidebar: './src/components/NoPageSidebar.astro',
			},
		}),
	],
});
