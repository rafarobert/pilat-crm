const models = require('../core/express');

// MEETINGS_LEADS

models.sequelize.meetingsLeads.belongsTo(models.sequelize.meetings, {foreignKey:'meeting_id', sourceKey:'id', as:'meetingLeadMeetings'});
models.sequelize.meetings.hasMany(models.sequelize.meetingsLeads,{foreignKey:'meeting_id', sourceKey:'id', as:'meetingLeadMeetings'});

models.sequelize.meetingsLeads.belongsTo(models.sequelize.leads, {foreignKey:'lead_id', sourceKey:'id', as:'meetingLeadLeads'});
models.sequelize.leads.hasMany(models.sequelize.meetingsLeads,{foreignKey:'lead_id', sourceKey:'id', as:'meetingLeadLeads'});

// LEADS

models.sequelize.leads.belongsTo(models.sequelize.leadsCstm, {foreignKey:'id', targetKey:'id_c', as:'leadLeadsCstm'});
models.sequelize.leadsCstm.hasMany(models.sequelize.leads,{foreignKey:'id', sourceKey:'id_c', as:'leadLeadsCstm'});

models.sequelize.leads.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.leads,{foreignKey:'modified_user_id', sourceKey: 'id'});

models.sequelize.leads.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.leads,{foreignKey:'created_by', sourceKey: 'id'});

models.sequelize.leads.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.leads,{foreignKey:'assigned_user_id', sourceKey: 'id'});

models.sequelize.leads.belongsTo(models.sequelize.emails, {foreignKey:'id', targetKey: 'parent_id', as:'leadEmails'});
models.sequelize.emails.hasMany(models.sequelize.leads,{foreignKey:'id', sourceKey: 'parent_id', as:'leadEmails'});

models.sequelize.leads.belongsTo(models.sequelize.callsLeads, {foreignKey:'id', targetKey: 'lead_id', as:'leadCallsLeads'});
models.sequelize.callsLeads.hasMany(models.sequelize.leads,{foreignKey:'id', sourceKey: 'lead_id', as:'leadCallsLeads'});

models.sequelize.leads.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey: 'item_id', as:'leadTracker'});
models.sequelize.tracker.hasMany(models.sequelize.leads,{foreignKey:'id', sourceKey: 'item_id', as:'leadTracker'});

models.sequelize.leads.belongsTo(models.sequelize.sugarfeed, {foreignKey:'id', sourceKey:'related_id', as:'leadSugarfeed'});
models.sequelize.sugarfeed.hasMany(models.sequelize.leads,{foreignKey:'id', sourceKey:'related_id', as:'leadSugarfeed'});

models.sequelize.leads.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'leadAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.leads,{foreignKey:'id', sourceKey: 'record_id', as:'leadAodIndexevent'});

// LEADS_AUDIT

models.sequelize.leadsAudit.belongsTo(models.sequelize.leadsCstm, {foreignKey:'parent_id', sourceKey:'id_c'});
models.sequelize.leadsCstm.hasMany(models.sequelize.leadsAudit,{foreignKey:'parent_id', sourceKey:'id_c'});

models.sequelize.leadsAudit.belongsTo(models.sequelize.users, {foreignKey:'created_by', sourceKey:'id'});
models.sequelize.users.hasMany(models.sequelize.leadsAudit,{foreignKey:'created_by', sourceKey:'id'});

// OPPORTUNITY

models.sequelize.opportunities.belongsTo(models.sequelize.opportunitiesContacts, {foreignKey:'id', targetKey: 'opportunity_id', as:'opportunityOpportunitiesContacts'});
models.sequelize.opportunitiesContacts.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey: 'opportunity_id', as:'opportunityOpportunitiesContacts'});

models.sequelize.opportunities.belongsTo(models.sequelize.opportunitiesCstm, {foreignKey:'id', targetKey:'id_c', as: 'opportunityOpportunitiesCstm'});
models.sequelize.opportunitiesCstm.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey:'id_c', as: 'opportunityOpportunitiesCstm'});

models.sequelize.opportunities.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey: 'id', as:'opportunityUsersModifiedUser'});
models.sequelize.users.hasMany(models.sequelize.opportunities,{foreignKey:'modified_user_id', sourceKey: 'id', as:'opportunityUsersModifiedUser'});

models.sequelize.opportunities.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey: 'id', as:'opportunityUsersCreatedBy'});
models.sequelize.users.hasMany(models.sequelize.opportunities,{foreignKey:'created_by', sourceKey: 'id', as:'opportunityUsersCreatedBy'});

models.sequelize.opportunities.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey: 'id', as:'opportunityUsersAssignedUser'});
models.sequelize.users.hasMany(models.sequelize.opportunities,{foreignKey:'assigned_user_id', sourceKey: 'id', as:'opportunityUsersAssignedUser'});

models.sequelize.opportunities.belongsTo(models.sequelize.emails, {foreignKey:'id', targetKey: 'parent_id', as:'opportunityEmails'});
models.sequelize.emails.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey: 'parent_id', as:'opportunityEmails'});

models.sequelize.opportunities.belongsTo(models.sequelize.accountsOpportunities, {foreignKey:'id', targetKey: 'opportunity_id', as:'opportunityAccountsOpportunities'});
models.sequelize.accountsOpportunities.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey: 'opportunity_id', as:'opportunityAccountsOpportunities'});

models.sequelize.opportunities.belongsTo(models.sequelize.aosQuotes, {foreignKey:'id', targetKey: 'opportunity_id', as:'opportunityAosQuotes'});
models.sequelize.aosQuotes.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey: 'opportunity_id', as:'opportunityAosQuotes'});

models.sequelize.opportunities.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey:'item_id', as:'opportunityTracker'});
models.sequelize.tracker.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey:'item_id', as:'opportunityTracker'});

models.sequelize.opportunities.belongsTo(models.sequelize.sugarfeed, {foreignKey:'id', sourceKey:'related_id', as:'opportunitySugarfeed'});
models.sequelize.sugarfeed.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey:'related_id', as:'opportunitySugarfeed'});

models.sequelize.opportunities.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'opportunityAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey: 'record_id', as:'opportunityAodIndexevent'});

models.sequelize.opportunities.belongsTo(models.sequelize.opportunitiesAudit, {foreignKey:'id', targetKey:'parent_id', as: 'opportunityOpportunitiesAudit'});
models.sequelize.opportunitiesAudit.hasMany(models.sequelize.opportunities,{foreignKey:'id', sourceKey:'parent_id', as: 'opportunityOpportunitiesAudit'});

// OPPORTUNITY_AUDIT

models.sequelize.opportunitiesAudit.belongsTo(models.sequelize.opportunities, {foreignKey:'parent_id', targetKey:'id', as: 'opportunityAuditOpportunities'});
models.sequelize.opportunities.hasMany(models.sequelize.opportunitiesAudit,{foreignKey:'parent_id', sourceKey:'id', as: 'opportunityAuditOpportunities'});

models.sequelize.opportunitiesAudit.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id', as: 'opportunityAuditUsers'});
models.sequelize.users.hasMany(models.sequelize.opportunitiesAudit,{foreignKey:'created_by', sourceKey:'id', as: 'opportunityAuditUsers'});

// OPPORTUNITIES_CONTACTS

models.sequelize.opportunitiesContacts.belongsTo(models.sequelize.opportunities, {foreignKey:'opportunity_id', targetKey:'id', as:'opportunityContactOpportunities'});
models.sequelize.opportunities.hasMany(models.sequelize.opportunitiesContacts,{foreignKey:'opportunity_id', sourceKey:'id', as:'opportunityContactOpportunities'});

models.sequelize.opportunitiesContacts.belongsTo(models.sequelize.contacts, {foreignKey:'contact_id', targetKey:'id', as:'opportunityContactContacts'});
models.sequelize.contacts.hasMany(models.sequelize.opportunitiesContacts,{foreignKey:'contact_id', sourceKey:'id', as:'opportunityContactContacts'});

// ACCOUNTS

models.sequelize.accounts.belongsTo(models.sequelize.accountsCstm, {foreignKey:'id', targetKey:'id_c', as: 'accountAccountsCstm'});
models.sequelize.accountsCstm.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey:'id_c', as: 'accountAccountsCstm'});

models.sequelize.accounts.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey:'id', as: 'accountUsersModifiedUser'});
models.sequelize.users.hasMany(models.sequelize.accounts,{foreignKey:'modified_user_id', sourceKey:'id', as: 'accountUsersModifiedUser'});

models.sequelize.accounts.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id', as: 'accountUsersCreatedBy'});
models.sequelize.users.hasMany(models.sequelize.accounts,{foreignKey:'created_by', sourceKey:'id', as: 'accountUsersCreatedBy'});

models.sequelize.accounts.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey:'id', as: 'accountUsersAssignedUser'});
models.sequelize.users.hasMany(models.sequelize.accounts,{foreignKey:'assigned_user_id', sourceKey:'id', as: 'accountUsersAssignedUser'});

models.sequelize.accounts.belongsTo(models.sequelize.accountsContacts, {foreignKey:'id', targetKey:'contact_id', as: 'accountAccountsContacts'});
models.sequelize.accountsContacts.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey:'contact_id', as: 'accountAccountsContacts'});

models.sequelize.accounts.belongsTo(models.sequelize.accountsOpportunities, {foreignKey:'id', targetKey:'account_id', as: 'accountAccountsOpportunities'});
models.sequelize.accountsOpportunities.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey:'account_id', as: 'accountAccountsOpportunities'});

models.sequelize.accounts.belongsTo(models.sequelize.emails, {foreignKey:'id', targetKey:'parent_id', as:'accountEmails'});
models.sequelize.emails.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey:'parent_id', as:'accountEmails'});

models.sequelize.accounts.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey:'item_id', as:'accountTracker'});
models.sequelize.tracker.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey:'item_id', as:'accountTracker'});

models.sequelize.accounts.belongsTo(models.sequelize.sugarfeed, {foreignKey:'id', targetKey:'related_id', as:'accountSugarfeed'});
models.sequelize.sugarfeed.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey:'related_id', as:'accountSugarfeed'});

models.sequelize.accounts.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'accountAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.accounts,{foreignKey:'id', sourceKey: 'record_id', as:'accountAodIndexevent'});

// ACCOUNTS_AUDIT

models.sequelize.accountsAudit.belongsTo(models.sequelize.accounts, {foreignKey:'parent_id', targetKey:'id', as:'accountAuditAccounts'});
models.sequelize.accounts.hasMany(models.sequelize.accountsAudit,{foreignKey:'parent_id', sourceKey:'id', as:'accountAuditAccounts'});

models.sequelize.accountsAudit.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id', as:'accountAuditUsers'});
models.sequelize.users.hasMany(models.sequelize.accountsAudit,{foreignKey:'created_by', sourceKey:'id', as:'accountAuditUsers'});

// ACCOUNTS_BUGS

models.sequelize.accountsBugs.belongsTo(models.sequelize.accounts, {foreignKey:'account_id', targetKey:'id'});
models.sequelize.accounts.hasMany(models.sequelize.accountsBugs,{foreignKey:'account_id', sourceKey:'id'});

models.sequelize.accountsBugs.belongsTo(models.sequelize.bugs, {foreignKey:'bug_id', targetKey:'id'});
models.sequelize.bugs.hasMany(models.sequelize.accountsBugs,{foreignKey:'bug_id', sourceKey:'id'});

// ACCOUNTS_CASES

models.sequelize.accountsCases.belongsTo(models.sequelize.accounts, {foreignKey:'account_id', targetKey:'id'});
models.sequelize.accounts.hasMany(models.sequelize.accountsCases,{foreignKey:'account_id', sourceKey:'id'});

models.sequelize.accountsCases.belongsTo(models.sequelize.cases, {foreignKey:'case_id', targetKey:'id'});
models.sequelize.cases.hasMany(models.sequelize.accountsCases,{foreignKey:'case_id', sourceKey:'id'});

// ACCOUNTS_CONTACTS

models.sequelize.accountsContacts.belongsTo(models.sequelize.contacts, {foreignKey:'contact_id', targetKey:'id', as:'contactAccountsContacts'});
models.sequelize.contacts.hasMany(models.sequelize.accountsContacts,{foreignKey:'contact_id', sourceKey:'id', as :'contactAccountsContacts'});

models.sequelize.accountsContacts.belongsTo(models.sequelize.accounts, {foreignKey:'account_id', targetKey:'id', as:'accountContactAccounts'});
models.sequelize.accounts.hasMany(models.sequelize.accountsContacts,{foreignKey:'account_id', sourceKey:'id', as:'accountContactAccounts'});

// ACCOUNTS_OPPORTUNITIES

models.sequelize.accountsOpportunities.belongsTo(models.sequelize.accounts, {foreignKey:'account_id', targetKey:'id', as:'accountOpportunityAccounts'});
models.sequelize.accounts.hasMany(models.sequelize.accountsOpportunities,{foreignKey:'account_id', sourceKey:'id', as:'accountOpportunityAccounts'});

models.sequelize.accountsOpportunities.belongsTo(models.sequelize.opportunities, {foreignKey:'opportunity_id', targetKey:'id', as:'accountOpportunityOpportunities'});
models.sequelize.opportunities.hasMany(models.sequelize.accountsOpportunities,{foreignKey:'opportunity_id', sourceKey:'id', as:'accountOpportunityOpportunities'});

// USERS

models.sequelize.users.belongsTo(models.sequelize.usersCstm, {foreignKey:'id', targetKey:'id_c', as:'userUsersCstm'});
models.sequelize.usersCstm.hasMany(models.sequelize.users,{foreignKey:'id', sourceKey:'id_c', as:'userUsersCstm'});

models.sequelize.users.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey:'item_id', as:'trackerItem'});
models.sequelize.tracker.hasMany(models.sequelize.users,{foreignKey:'id', sourceKey:'item_id', as:'trackerItem'});

models.sequelize.users.belongsTo(models.sequelize.sugarfeed, {foreignKey:'id', targetKey:'related_id', as:'userSugarfeed'});
models.sequelize.sugarfeed.hasMany(models.sequelize.users,{foreignKey:'id', sourceKey:'related_id', as:'userSugarfeed'});

models.sequelize.users.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'userAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.users,{foreignKey:'id', sourceKey: 'record_id', as:'userAodIndexevent'});

models.sequelize.users.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey:'id'});
// models.sequelize.users.hasMany(models.sequelize.users,{foreignKey:'modified_user_id', sourceKey:'id'});

models.sequelize.users.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id'});
// models.sequelize.users.hasMany(models.sequelize.users,{foreignKey:'created_by', sourceKey:'id'});

// EMAIL_ADDRESSES

// EMAIL_ADDR_BEAN_REL

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.emailAddresses, {foreignKey:'email_address_id', targetKey:'id', as:'emailAddrBeanRelEmailAddresses'});
models.sequelize.emailAddresses.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'email_address_id', sourceKey:'id', as:'emailAddrBeanRelEmailAddresses'});

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.contacts, {foreignKey:'bean_id', targetKey:'id', as:'emailAddrBeanRelContacts'});
models.sequelize.contacts.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'bean_id', sourceKey:'id', as:'emailAddrBeanRelContacts'});

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.accounts, {foreignKey:'bean_id', targetKey:'id', as:'emailAddrBeanRelAccounts'});
models.sequelize.accounts.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'bean_id', sourceKey:'id', as:'emailAddrBeanRelAccounts'});

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.users, {foreignKey:'bean_id', targetKey:'id', as:'emailAddrBeanRelUsers'});
models.sequelize.users.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'bean_id', sourceKey:'id', as:'emailAddrBeanRelUsers'});

// EMAIL_ADDRESSES_AUDIT

models.sequelize.emailAddressesAudit.belongsTo(models.sequelize.emailAddresses, {foreignKey:'parent_id', targetKey:'id'});
models.sequelize.emailAddresses.hasMany(models.sequelize.emailAddressesAudit,{foreignKey:'parent_id', sourceKey:'id'});

models.sequelize.emailAddressesAudit.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.emailAddressesAudit,{foreignKey:'created_by', sourceKey:'id'});

// EMAIL_ADDR_BEAN_REL

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.emailAddresses, {foreignKey:'email_address_id', targetKey:'id'});
models.sequelize.emailAddresses.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'email_address_id', sourceKey:'id'});

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.users, {foreignKey:'bean_id', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'bean_id', sourceKey:'id'});

// USER_PREFERENCES

models.sequelize.userPreferences.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.userPreferences,{foreignKey:'assigned_user_id', sourceKey:'id'});

// ACL_ROLES_USERS

models.sequelize.aclRolesUsers.belongsTo(models.sequelize.users, {foreignKey:'user_id', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.aclRolesUsers,{foreignKey:'user_id', sourceKey:'id'});

models.sequelize.aclRolesUsers.belongsTo(models.sequelize.roles, {foreignKey:'role_id', targetKey:'id'});
models.sequelize.roles.hasMany(models.sequelize.aclRolesUsers,{foreignKey:'role_id', sourceKey:'id'});

// SECURITYGROUPS_USERS

models.sequelize.securitygroupsUsers.belongsTo(models.sequelize.users, {foreignKey:'user_id', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.securitygroupsUsers,{foreignKey:'user_id', targetKey:'id'});

// USERS_LAST_IMPORT

models.sequelize.usersLastImport.belongsTo(models.sequelize.leads, {foreignKey:'bean_id', targetKey: 'id'});
models.sequelize.leads.hasMany(models.sequelize.usersLastImport,{foreignKey:'bean_id', sourceKey: 'id'});

// EMAIL_ADDR_BEAN_REL

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.leads, {foreignKey:'bean_id', targetKey: 'id'});
models.sequelize.leads.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'bean_id', sourceKey: 'id'});

// CALLS

models.sequelize.calls.belongsTo(models.sequelize.callsCstm, {foreignKey:'id', targetKey:'id_c', as:'callCallsCstm'});
models.sequelize.callsCstm.hasMany(models.sequelize.calls,{foreignKey:'id', sourceKey:'id_c', as:'callCallsCstm'});

models.sequelize.calls.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.calls,{foreignKey:'modified_user_id', sourceKey: 'id'});

models.sequelize.calls.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.calls,{foreignKey:'created_by', sourceKey: 'id'});

models.sequelize.calls.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.calls,{foreignKey:'assigned_user_id', sourceKey: 'id'});

models.sequelize.calls.belongsTo(models.sequelize.callsLeads, {foreignKey:'id', targetKey: 'call_id', as:'callCallsLeads'});
models.sequelize.callsLeads.hasMany(models.sequelize.calls,{foreignKey:'id', sourceKey: 'call_id', as:'callCallsLeads'});

models.sequelize.calls.belongsTo(models.sequelize.callsUsers, {foreignKey:'id', targetKey: 'call_id', as:'callCallsUsers'});
models.sequelize.callsUsers.hasMany(models.sequelize.calls,{foreignKey:'id', sourceKey: 'call_id', as:'callCallsUsers'});

models.sequelize.calls.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey:'item_id', as:'callTracker'});
models.sequelize.tracker.hasMany(models.sequelize.calls,{foreignKey:'id', sourceKey:'item_id', as:'callTracker'});

models.sequelize.calls.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'callAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.calls,{foreignKey:'id', sourceKey: 'record_id', as:'callAodIndexevent'});

models.sequelize.calls.belongsTo(models.sequelize.calls, {foreignKey:'parent_id', targetKey: 'id'});

// CALLS_LEADS

models.sequelize.callsLeads.belongsTo(models.sequelize.leads, {foreignKey:'lead_id', targetKey: 'id', as:'callLeadLeads'});
models.sequelize.leads.hasMany(models.sequelize.callsLeads,{foreignKey:'lead_id', sourceKey: 'id', as:'callLeadLeads'});

models.sequelize.callsLeads.belongsTo(models.sequelize.calls, {foreignKey:'call_id', targetKey: 'id', as:'callLeadCalls'});
models.sequelize.calls.hasMany(models.sequelize.callsLeads,{foreignKey:'call_id', sourceKey: 'id', as:'callLeadCalls'});

// CALLS_CONTACTS

models.sequelize.callsContacts.belongsTo(models.sequelize.calls, {foreignKey:'call_id', targetKey: 'id', as:'callContactCalls'});
models.sequelize.calls.hasMany(models.sequelize.callsContacts,{foreignKey:'call_id', sourceKey: 'id', as:'callContactCalls'});

models.sequelize.callsContacts.belongsTo(models.sequelize.contacts, {foreignKey:'contact_id', targetKey: 'id', as:'callContactContacts'});
models.sequelize.contacts.hasMany(models.sequelize.callsContacts,{foreignKey:'contact_id', sourceKey: 'id', as:'callContactContacts'});

// CALLS_USERS

models.sequelize.callsUsers.belongsTo(models.sequelize.calls, {foreignKey:'call_id', targetKey: 'id', as:'callUserCalls'});
models.sequelize.calls.hasMany(models.sequelize.callsUsers,{foreignKey:'call_id', sourceKey: 'id', as:'callUserCalls'});

models.sequelize.callsUsers.belongsTo(models.sequelize.users, {foreignKey:'user_id', targetKey: 'id', as:'callUserUsers'});
models.sequelize.users.hasMany(models.sequelize.callsUsers,{foreignKey:'user_id', sourceKey: 'id', as:'callUserUsers'});

// CONTACTS

models.sequelize.contacts.belongsTo(models.sequelize.contactsCstm, {foreignKey:'id', targetKey: 'id_c', as: 'contactContactsCstm'});
models.sequelize.contactsCstm.hasMany(models.sequelize.contacts,{foreignKey:'id', sourceKey: 'id_c', as: 'contactContactsCstm'});

models.sequelize.contacts.belongsTo(models.sequelize.emailAddrBeanRel, {foreignKey:'id', targetKey: 'bean_id', as: 'contactEmailAddrBeanRel'});
models.sequelize.emailAddrBeanRel.hasMany(models.sequelize.contacts,{foreignKey:'id', sourceKey: 'bean_id', as: 'contactEmailAddrBeanRel'});

models.sequelize.contacts.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.contacts,{foreignKey:'modified_user_id', sourceKey: 'id'});

models.sequelize.contacts.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.contacts,{foreignKey:'created_by', sourceKey: 'id'});

models.sequelize.contacts.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.contacts,{foreignKey:'assigned_user_id', sourceKey: 'id'});

models.sequelize.contacts.belongsTo(models.sequelize.emails, {foreignKey:'id', targetKey: 'parent_id', as:'contactEmails'});
models.sequelize.emails.hasMany(models.sequelize.contacts,{foreignKey:'id', sourceKey: 'parent_id', as:'contactEmails'});

models.sequelize.contacts.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey:'item_id', as:'contactTracker'});
models.sequelize.tracker.hasMany(models.sequelize.contacts,{foreignKey:'id', sourceKey:'item_id', as:'contactTracker'});

models.sequelize.contacts.belongsTo(models.sequelize.sugarfeed, {foreignKey:'id', targetKey:'related_id', as:'contactSugarfeed'});
models.sequelize.sugarfeed.hasMany(models.sequelize.contacts,{foreignKey:'id', sourceKey:'related_id', as:'contactSugarfeed'});

models.sequelize.contacts.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'contactAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.contacts,{foreignKey:'id', sourceKey: 'record_id', as:'contactAodIndexevent'});

// CONTACTS_AUDIT

models.sequelize.contactsAudit.belongsTo(models.sequelize.contacts, {foreignKey:'parent_id', targetKey: 'id', as:'contactAuditContacts'});
models.sequelize.contacts.hasMany(models.sequelize.contactsAudit,{foreignKey:'parent_id', sourceKey: 'id', as:'contactAuditContacts'});

models.sequelize.contactsAudit.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id', as:'contactAuditUsers'});
models.sequelize.users.hasMany(models.sequelize.contactsAudit,{foreignKey:'created_by', sourceKey:'id', as:'contactAuditUsers'});

// CONTACTS_BUGS

models.sequelize.contactsBugs.belongsTo(models.sequelize.contacts, {foreignKey:'contact_id', targetKey: 'id'});
models.sequelize.contacts.hasMany(models.sequelize.contactsBugs,{foreignKey:'contact_id', sourceKey: 'id'});

models.sequelize.contactsBugs.belongsTo(models.sequelize.bugs, {foreignKey:'bug_id', targetKey: 'id'});
models.sequelize.bugs.hasMany(models.sequelize.contactsBugs,{foreignKey:'bug_id', sourceKey: 'id'});

// CONTACTS_CASES

models.sequelize.contactsCases.belongsTo(models.sequelize.contacts, {foreignKey:'contact_id', targetKey: 'id'});
models.sequelize.contacts.hasMany(models.sequelize.contactsCases,{foreignKey:'contact_id', sourceKey: 'id'});

models.sequelize.contactsCases.belongsTo(models.sequelize.cases, {foreignKey:'case_id', targetKey: 'id'});
models.sequelize.cases.hasMany(models.sequelize.contactsCases,{foreignKey:'case_id', sourceKey: 'id'});

// CONTACTS_CSTM


// CONTACTS_USERS

models.sequelize.contactsUsers.belongsTo(models.sequelize.contacts, {foreignKey:'contact_id', targetKey: 'id'});
models.sequelize.contacts.hasMany(models.sequelize.contactsUsers,{foreignKey:'contact_id', sourceKey: 'id'});

models.sequelize.contactsUsers.belongsTo(models.sequelize.users, {foreignKey:'user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.contactsUsers,{foreignKey:'user_id', sourceKey: 'id'});

// AOS_QUOTES

models.sequelize.aosQuotes.belongsTo(models.sequelize.aosQuotesCstm, {foreignKey:'id', targetKey: 'id_c', as: 'aoQuoteAosQuotesCstm'});
models.sequelize.aosQuotesCstm.hasMany(models.sequelize.aosQuotes,{foreignKey:'id', sourceKey: 'id_c', as: 'aoQuoteAosQuotesCstm'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.aosQuotes,{foreignKey:'modified_user_id', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.aosQuotes,{foreignKey:'created_by', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.aosQuotes,{foreignKey:'assigned_user_id', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.opportunities, {foreignKey:'opportunity_id', targetKey: 'id'});
models.sequelize.opportunities.hasMany(models.sequelize.aosQuotes,{foreignKey:'opportunity_id', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.opportunities, {foreignKey:'opportunity_id', targetKey: 'id'});
models.sequelize.opportunities.hasMany(models.sequelize.aosQuotes,{foreignKey:'opportunity_id', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.accounts, {foreignKey:'billing_account_id', targetKey: 'id'});
models.sequelize.accounts.hasMany(models.sequelize.aosQuotes,{foreignKey:'billing_account_id', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.contacts, {foreignKey:'billing_contact_id', targetKey: 'id'});
models.sequelize.contacts.hasMany(models.sequelize.aosQuotes,{foreignKey:'billing_contact_id', sourceKey: 'id'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.tracker, {foreignKey:'id', targetKey:'item_id', as:'aoQuoteTracker'});
models.sequelize.tracker.hasMany(models.sequelize.aosQuotes,{foreignKey:'id', sourceKey:'item_id', as:'aoQuoteTracker'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.sugarfeed, {foreignKey:'id', targetKey:'related_id', as:'aoQuoteSugarfeed'});
models.sequelize.sugarfeed.hasMany(models.sequelize.aosQuotes,{foreignKey:'id', sourceKey:'related_id', as:'aoQuoteSugarfeed'});

models.sequelize.aosQuotes.belongsTo(models.sequelize.aodIndexevent, {foreignKey:'id', targetKey: 'record_id', as:'aoQuoteAodIndexevent'});
models.sequelize.aodIndexevent.hasMany(models.sequelize.aosQuotes,{foreignKey:'id', sourceKey: 'record_id', as:'aoQuoteAodIndexevent'});

// AOS_QUOTES_AOS_INVOICES_C

// AOS_QUOTES_AUDIT

models.sequelize.aosQuotesAudit.belongsTo(models.sequelize.aosQuotes, {foreignKey:'parent_id', targetKey: 'id'});
models.sequelize.aosQuotes.hasMany(models.sequelize.aosQuotesAudit,{foreignKey:'parent_id', sourceKey: 'id'});

models.sequelize.aosQuotesAudit.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.aosQuotesAudit,{foreignKey:'created_by', sourceKey:'id'});

// AOS_QUOTES_CSTM

// AOS_QUOTES_OS_CONTRACTS_C

// AOS_QUOTES_PROJECT_C

// AOD_INDEXEVENT

models.sequelize.aodIndexevent.belongsTo(models.sequelize.users, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventUsers'});
models.sequelize.users.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventUsers'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.contacts, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventContacts'});
models.sequelize.contacts.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventContacts'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.aosQuotes, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventAosQuotes'});
models.sequelize.aosQuotes.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventAosQuotes'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.leads, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventLeads'});
models.sequelize.leads.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventLeads'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.calls, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventCalls'});
models.sequelize.calls.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventCalls'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.accounts, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventAccount'});
models.sequelize.accounts.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventAccount'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.opportunities, {foreignKey:'record_id', targetKey: 'id', as:'aodIndexeventOpportunities'});
models.sequelize.opportunities.hasMany(models.sequelize.aodIndexevent,{foreignKey:'record_id', sourceKey: 'id', as:'aodIndexeventOpportunities'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.aodIndexevent,{foreignKey:'modified_user_id', sourceKey: 'id'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.aodIndexevent,{foreignKey:'created_by', sourceKey: 'id'});

models.sequelize.aodIndexevent.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey: 'id'});
models.sequelize.users.hasMany(models.sequelize.aodIndexevent,{foreignKey:'assigned_user_id', sourceKey: 'id'});

// SUGARFEED

models.sequelize.sugarfeed.belongsTo(models.sequelize.users, {foreignKey:'assigned_user_id', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.sugarfeed,{foreignKey:'assigned_user_id', sourceKey:'id'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.users, {foreignKey:'modified_user_id', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.sugarfeed,{foreignKey:'modified_user_id', sourceKey:'id'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.users, {foreignKey:'created_by', targetKey:'id'});
models.sequelize.users.hasMany(models.sequelize.sugarfeed,{foreignKey:'created_by', sourceKey:'id'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.leads, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedLeads'});
models.sequelize.leads.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedLeads'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.users, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedUsers'});
models.sequelize.users.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedUsers'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.opportunities, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedOpportunities'});
models.sequelize.opportunities.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedOpportunities'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.accounts, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedAccounts'});
models.sequelize.accounts.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedAccounts'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.contacts, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedContacts'});
models.sequelize.contacts.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedContacts'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.aosQuotes, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedAosQuotes'});
models.sequelize.aosQuotes.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedAosQuotes'});

models.sequelize.sugarfeed.belongsTo(models.sequelize.calls, {foreignKey:'related_id', targetKey:'id', as:'sugarfeedCalls'});
models.sequelize.calls.hasMany(models.sequelize.sugarfeed,{foreignKey:'related_id', sourceKey:'id', as:'sugarfeedCalls'});

// TRACKER

models.sequelize.tracker.belongsTo(models.sequelize.users, {foreignKey:'item_id', targetKey:'id', as:'trackerUsers'});
models.sequelize.users.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerUsers'});

models.sequelize.tracker.belongsTo(models.sequelize.leads, {foreignKey:'item_id', targetKey:'id', as:'trackerLeads'});
models.sequelize.leads.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerLeads'});

models.sequelize.tracker.belongsTo(models.sequelize.opportunities, {foreignKey:'item_id', targetKey:'id', as:'trackerOpportunitiees'});
models.sequelize.opportunities.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerOpportunities'});

models.sequelize.tracker.belongsTo(models.sequelize.contacts, {foreignKey:'item_id', targetKey:'id', as:'trackerContacts'});
models.sequelize.contacts.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerContacts'});

models.sequelize.tracker.belongsTo(models.sequelize.aosQuotes, {foreignKey:'item_id', targetKey:'id', as:'trackerAosQuotes'});
models.sequelize.aosQuotes.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerAosQuotes'});

models.sequelize.tracker.belongsTo(models.sequelize.accounts, {foreignKey:'item_id', targetKey:'id', as:'trackerAccounts'});
models.sequelize.accounts.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerAccounts'});

models.sequelize.tracker.belongsTo(models.sequelize.calls, {foreignKey:'item_id', targetKey:'id', as:'trackerCalls'});
models.sequelize.calls.hasMany(models.sequelize.tracker,{foreignKey:'item_id', sourceKey:'id', as:'trackerCalls'});

module.exports = models;
