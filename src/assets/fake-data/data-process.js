import img1 from '../images/common/Gen1.jpg';
import img2 from '../images/common/gen2.jpg';
import img3 from '../images/common/gen3.jpg';
import img4 from '../images/common/gen4.jpg';
import img5 from '../images/common/gen5.jpg';
import img6 from '../images/common/gen6.jpg';
import img7 from '../images/common/gen7.jpg';

const dataProcess = [
    {
        id: 1,
        img: img1,
        category: 'Data Ingestion',
        title: 'Real-Time & Historical Data Ingestion from Marketplaces & APIs',
        time: '20 Jun 2022',
        text: 'NFTracker starts by ingesting real-time and historical data from NFT marketplaces, blockchain nodes, and APIs. Dashboard shows the data sources and current sync time.',
    },
    {
        id: 2,
        img: img2,
        category: 'Data Processing & Enrichment',
        title: 'Processing & Enriching Raw Data',
        time: '20 Jun 2022',
        text: 'After ingestion, raw data is processed, categorized, and enriched with metadata such as wallet addresses, timestamps, and associated NFTs. Processing progress is displayed in the interface.',
    },
    {
        id: 3,
        img: img3,
        category: 'Geolocation Tracking',
        title: 'Geolocation Tracking for Suspicious Transactions',
        time: '20 Jun 2022',
        text: 'For flagged transactions, NFTracker uses geolocation analysis to pinpoint the wallet locations. The map interface visually displays wallet locations with clickable markers.',
    },
    {
        id: 4,
        img: img4,
        category: 'Suspicious Activity Detection',
        title: 'Detection of Suspicious Activity & Trade Analysis',
        time: '20 Jun 2022',
        text: 'NFTracker detects suspicious activities such as wash trading, unusual transaction volumes, and trades at extreme price points. Alerts for suspicious activities are displayed with severity levels.',
    },
    {
        id: 5,
        img: img5,
        category: 'User-Defined Parameters',
        title: 'Customizable Parameters & Real-Time Adjustments',
        time: '20 Jun 2022',
        text: 'Users can define thresholds and adjust parameters for detecting suspicious activity, with instant feedback on flagged transactions through real-time adjustment sliders.',
    },
    {
        id: 6,
        img: img6,
        category: 'Reporting & Export',
        title: 'Generate & Export Detailed Reports',
        time: '20 Jun 2022',
        text: 'NFTracker generates reports for suspicious transactions, wallet activities, and geolocation data. Reports can be exported in multiple formats (PDF, CSV) or shared with investigative teams.',
    },
    {
        id: 7,
        img: img7,
        category: 'Dashboard & Insights',
        title: 'High-Level Dashboard Insights and Risk Summaries',
        text: 'NFTracker’s overview dashboard summarizes key metrics like active cases, flagged trades, and risk levels. Key metrics widgets track transaction data, suspicious trades, and geolocation insights.',
    },
];

export default dataProcess;
