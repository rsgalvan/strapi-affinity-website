import type { Schema, Attribute } from '@strapi/strapi';

export interface FundComponentsCalendarYear extends Schema.Component {
  collectionName: 'components_fund_components_calendar_years';
  info: {
    displayName: 'Calendar Year';
  };
  attributes: {
    year: Attribute.String;
    percent: Attribute.String;
  };
}

export interface FundComponentsFiles extends Schema.Component {
  collectionName: 'components_fund_components_files';
  info: {
    displayName: 'Files';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'Prospectus',
        'Fact Sheet',
        'KIIDS',
        'Plan Rules',
        'Target Fund Fact Sheet'
      ]
    >;
    attachedFiles: Attribute.Media;
  };
}

export interface FundComponentsFundInfo extends Schema.Component {
  collectionName: 'components_fund_components_fund_infos';
  info: {
    displayName: 'fund-info';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    fundSuitability: Attribute.String;
    currency: Attribute.String;
    investmentHorizon: Attribute.String;
    fundType: Attribute.String;
    holdingPeriod: Attribute.String;
    settlementDays: Attribute.String;
    dailyCutOff: Attribute.String;
    initialAmountInvestment: Attribute.String;
    additionalInvestment: Attribute.String;
    minimumRedemption: Attribute.String;
    maintainingBalance: Attribute.String;
    annualManagementFee: Attribute.String;
    frontEndLoad: Attribute.String;
    earlyRedemptionFee: Attribute.String;
    historicalDividendYield: Attribute.String;
  };
}

export interface FundComponentsFundPortfolio extends Schema.Component {
  collectionName: 'components_fund_components_fund_portfolios';
  info: {
    displayName: 'Portfolio Composition';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    data: Attribute.JSON;
  };
}

export interface FundComponentsNavpu extends Schema.Component {
  collectionName: 'components_fund_components_navpus';
  info: {
    displayName: 'Navpu';
    description: '';
  };
  attributes: {
    yearToDate: Attribute.String;
    cumulativeSinceInception: Attribute.String;
    inceptionDate: Attribute.Date;
    cumulativeMonth: Attribute.Date;
    navpuHistory: Attribute.JSON;
    navDate: Attribute.Date;
    calendarYear: Attribute.Component<'fund-components.calendar-year', true>;
  };
}

export interface FundComponentsParties extends Schema.Component {
  collectionName: 'components_fund_components_parties';
  info: {
    displayName: 'Parties';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface FundComponentsPortfolio extends Schema.Component {
  collectionName: 'components_fund_components_portfolios';
  info: {
    displayName: 'Portfolio';
    description: '';
  };
  attributes: {
    portfolioComposition: Attribute.Component<
      'fund-components.fund-portfolio',
      true
    >;
    name: Attribute.String;
  };
}

export interface FundComponentsTopHoldings extends Schema.Component {
  collectionName: 'components_fund_components_top_holdings';
  info: {
    displayName: 'Top Holdings';
    description: '';
  };
  attributes: {
    topHoldingComposition: Attribute.Component<
      'fund-components.fund-portfolio',
      true
    >;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fund-components.calendar-year': FundComponentsCalendarYear;
      'fund-components.files': FundComponentsFiles;
      'fund-components.fund-info': FundComponentsFundInfo;
      'fund-components.fund-portfolio': FundComponentsFundPortfolio;
      'fund-components.navpu': FundComponentsNavpu;
      'fund-components.parties': FundComponentsParties;
      'fund-components.portfolio': FundComponentsPortfolio;
      'fund-components.top-holdings': FundComponentsTopHoldings;
    }
  }
}
