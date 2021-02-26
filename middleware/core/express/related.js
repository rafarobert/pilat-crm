const models = require('../core/express');




// accounts

//<es-section>

models.sequelize.accounts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accounts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// accounts_audit

//<es-section>

models.sequelize.accountsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accountsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// accounts_bugs

//<es-section>

models.sequelize.accountsBugs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accountsBugs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// accounts_cases

//<es-section>

models.sequelize.accountsCases.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accountsCases,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// accounts_contacts

//<es-section>

models.sequelize.accountsContacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accountsContacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// accounts_cstm

//<es-section>

models.sequelize.accountsCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accountsCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// accounts_opportunities

//<es-section>

models.sequelize.accountsOpportunities.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.accountsOpportunities,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// acl_actions

//<es-section>

models.sequelize.aclActions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aclActions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// acl_roles

//<es-section>

models.sequelize.aclRoles.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aclRoles,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// acl_roles_actions

//<es-section>

models.sequelize.aclRolesActions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aclRolesActions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// acl_roles_users

//<es-section>

models.sequelize.aclRolesUsers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aclRolesUsers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// address_book

//<es-section>

models.sequelize.addressBook.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.addressBook,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// alerts

//<es-section>

models.sequelize.alerts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.alerts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_projecttemplates

//<es-section>

models.sequelize.amProjecttemplates.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amProjecttemplates,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_projecttemplates_audit

//<es-section>

models.sequelize.amProjecttemplatesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amProjecttemplatesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_projecttemplates_contacts_1_c

//<es-section>

models.sequelize.amProjecttemplatesContacts1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amProjecttemplatesContacts1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_projecttemplates_project_1_c

//<es-section>

models.sequelize.amProjecttemplatesProject1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amProjecttemplatesProject1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_projecttemplates_users_1_c

//<es-section>

models.sequelize.amProjecttemplatesUsers1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amProjecttemplatesUsers1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_tasktemplates

//<es-section>

models.sequelize.amTasktemplates.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amTasktemplates,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_tasktemplates_am_projecttemplates_c

//<es-section>

models.sequelize.amTasktemplatesAmProjecttemplatesC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amTasktemplatesAmProjecttemplatesC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// am_tasktemplates_audit

//<es-section>

models.sequelize.amTasktemplatesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.amTasktemplatesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// analytic_reporting

//<es-section>

models.sequelize.analyticReporting.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.analyticReporting,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aobh_businesshours

//<es-section>

models.sequelize.aobhBusinesshours.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aobhBusinesshours,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aod_index

//<es-section>

models.sequelize.aodIndex.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aodIndex,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aod_indexevent

//<es-section>

models.sequelize.aodIndexevent.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aodIndexevent,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aod_indexevent_audit

//<es-section>

models.sequelize.aodIndexeventAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aodIndexeventAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aod_index_audit

//<es-section>

models.sequelize.aodIndexAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aodIndexAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aok_knowledgebase

//<es-section>

models.sequelize.aokKnowledgebase.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aokKnowledgebase,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aok_knowledgebase_audit

//<es-section>

models.sequelize.aokKnowledgebaseAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aokKnowledgebaseAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aok_knowledgebase_categories

//<es-section>

models.sequelize.aokKnowledgebaseCategories.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aokKnowledgebaseCategories,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aok_knowledge_base_categories

//<es-section>

models.sequelize.aokKnowledgeBaseCategories.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aokKnowledgeBaseCategories,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aok_knowledge_base_categories_audit

//<es-section>

models.sequelize.aokKnowledgeBaseCategoriesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aokKnowledgeBaseCategoriesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aop_case_events

//<es-section>

models.sequelize.aopCaseEvents.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aopCaseEvents,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aop_case_events_audit

//<es-section>

models.sequelize.aopCaseEventsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aopCaseEventsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aop_case_updates

//<es-section>

models.sequelize.aopCaseUpdates.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aopCaseUpdates,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aop_case_updates_audit

//<es-section>

models.sequelize.aopCaseUpdatesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aopCaseUpdatesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aor_charts

//<es-section>

models.sequelize.aorCharts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aorCharts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aor_conditions

//<es-section>

models.sequelize.aorConditions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aorConditions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aor_fields

//<es-section>

models.sequelize.aorFields.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aorFields,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aor_reports

//<es-section>

models.sequelize.aorReports.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aorReports,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aor_reports_audit

//<es-section>

models.sequelize.aorReportsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aorReportsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aor_scheduled_reports

//<es-section>

models.sequelize.aorScheduledReports.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aorScheduledReports,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_contracts

//<es-section>

models.sequelize.aosContracts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosContracts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_contracts_audit

//<es-section>

models.sequelize.aosContractsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosContractsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_contracts_documents

//<es-section>

models.sequelize.aosContractsDocuments.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosContractsDocuments,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_invoices

//<es-section>

models.sequelize.aosInvoices.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosInvoices,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_invoices_audit

//<es-section>

models.sequelize.aosInvoicesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosInvoicesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_line_item_groups

//<es-section>

models.sequelize.aosLineItemGroups.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosLineItemGroups,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_line_item_groups_audit

//<es-section>

models.sequelize.aosLineItemGroupsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosLineItemGroupsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_pdf_templates

//<es-section>

models.sequelize.aosPdfTemplates.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosPdfTemplates,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_pdf_templates_audit

//<es-section>

models.sequelize.aosPdfTemplatesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosPdfTemplatesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_products

//<es-section>

models.sequelize.aosProducts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosProducts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_products_audit

//<es-section>

models.sequelize.aosProductsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosProductsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_products_quotes

//<es-section>

models.sequelize.aosProductsQuotes.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosProductsQuotes,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_products_quotes_audit

//<es-section>

models.sequelize.aosProductsQuotesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosProductsQuotesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_product_categories

//<es-section>

models.sequelize.aosProductCategories.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosProductCategories,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_product_categories_audit

//<es-section>

models.sequelize.aosProductCategoriesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosProductCategoriesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_quotes

//<es-section>

models.sequelize.aosQuotes.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosQuotes,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_quotes_aos_invoices_c

//<es-section>

models.sequelize.aosQuotesAosInvoicesC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosQuotesAosInvoicesC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_quotes_audit

//<es-section>

models.sequelize.aosQuotesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosQuotesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_quotes_cstm

//<es-section>

models.sequelize.aosQuotesCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosQuotesCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_quotes_os_contracts_c

//<es-section>

models.sequelize.aosQuotesOsContractsC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosQuotesOsContractsC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aos_quotes_project_c

//<es-section>

models.sequelize.aosQuotesProjectC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aosQuotesProjectC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aow_actions

//<es-section>

models.sequelize.aowActions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aowActions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aow_conditions

//<es-section>

models.sequelize.aowConditions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aowConditions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aow_processed

//<es-section>

models.sequelize.aowProcessed.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aowProcessed,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aow_processed_aow_actions

//<es-section>

models.sequelize.aowProcessedAowActions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aowProcessedAowActions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aow_workflow

//<es-section>

models.sequelize.aowWorkflow.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aowWorkflow,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// aow_workflow_audit

//<es-section>

models.sequelize.aowWorkflowAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.aowWorkflowAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// bugs

//<es-section>

models.sequelize.bugs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.bugs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// bugs_audit

//<es-section>

models.sequelize.bugsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.bugsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls

//<es-section>

models.sequelize.calls.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.calls,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls_contacts

//<es-section>

models.sequelize.callsContacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.callsContacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls_cstm

//<es-section>

models.sequelize.callsCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.callsCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls_leads

//<es-section>

models.sequelize.callsLeads.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.callsLeads,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls_reschedule

//<es-section>

models.sequelize.callsReschedule.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.callsReschedule,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls_reschedule_audit

//<es-section>

models.sequelize.callsRescheduleAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.callsRescheduleAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// calls_users

//<es-section>

models.sequelize.callsUsers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.callsUsers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// campaigns

//<es-section>

models.sequelize.campaigns.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.campaigns,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// campaigns_audit

//<es-section>

models.sequelize.campaignsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.campaignsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// campaign_log

//<es-section>

models.sequelize.campaignLog.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.campaignLog,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// campaign_trkrs

//<es-section>

models.sequelize.campaignTrkrs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.campaignTrkrs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// cases

//<es-section>

models.sequelize.cases.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.cases,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// cases_audit

//<es-section>

models.sequelize.casesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.casesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// cases_bugs

//<es-section>

models.sequelize.casesBugs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.casesBugs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// cases_cstm

//<es-section>

models.sequelize.casesCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.casesCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// config

//<es-section>

models.sequelize.config.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.config,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// contacts

//<es-section>

models.sequelize.contacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.contacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// contacts_audit

//<es-section>

models.sequelize.contactsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.contactsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// contacts_bugs

//<es-section>

models.sequelize.contactsBugs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.contactsBugs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// contacts_cases

//<es-section>

models.sequelize.contactsCases.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.contactsCases,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// contacts_cstm

//<es-section>

models.sequelize.contactsCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.contactsCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// contacts_users

//<es-section>

models.sequelize.contactsUsers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.contactsUsers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// cron_remove_documents

//<es-section>

models.sequelize.cronRemoveDocuments.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.cronRemoveDocuments,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// currencies

//<es-section>

models.sequelize.currencies.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.currencies,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// custom_fields

//<es-section>

models.sequelize.customFields.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.customFields,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// documents

//<es-section>

models.sequelize.documents.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documents,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// documents_accounts

//<es-section>

models.sequelize.documentsAccounts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documentsAccounts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// documents_bugs

//<es-section>

models.sequelize.documentsBugs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documentsBugs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// documents_cases

//<es-section>

models.sequelize.documentsCases.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documentsCases,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// documents_contacts

//<es-section>

models.sequelize.documentsContacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documentsContacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// documents_opportunities

//<es-section>

models.sequelize.documentsOpportunities.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documentsOpportunities,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// document_revisions

//<es-section>

models.sequelize.documentRevisions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.documentRevisions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// eapm

//<es-section>

models.sequelize.eapm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.eapm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// emailman

//<es-section>

models.sequelize.emailman.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailman,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// emails

//<es-section>

models.sequelize.emails.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emails,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// emails_beans

//<es-section>

models.sequelize.emailsBeans.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailsBeans,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// emails_email_addr_rel

//<es-section>

models.sequelize.emailsEmailAddrRel.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailsEmailAddrRel,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// emails_text

//<es-section>

models.sequelize.emailsText.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailsText,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_addresses

//<es-section>

models.sequelize.emailAddresses.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailAddresses,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_addresses_audit

//<es-section>

models.sequelize.emailAddressesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailAddressesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_addr_bean_rel

//<es-section>

models.sequelize.emailAddrBeanRel.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailAddrBeanRel,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_cache

//<es-section>

models.sequelize.emailCache.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailCache,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_marketing

//<es-section>

models.sequelize.emailMarketing.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailMarketing,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_marketing_prospect_lists

//<es-section>

models.sequelize.emailMarketingProspectLists.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailMarketingProspectLists,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_templates

//<es-section>

models.sequelize.emailTemplates.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailTemplates,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// email_templates_cstm

//<es-section>

models.sequelize.emailTemplatesCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.emailTemplatesCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// erp_cliente

//<es-section>

models.sequelize.erpCliente.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.erpCliente,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// erp_cliente_audit

//<es-section>

models.sequelize.erpClienteAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.erpClienteAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// favorites

//<es-section>

models.sequelize.favorites.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.favorites,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fields_meta_data

//<es-section>

models.sequelize.fieldsMetaData.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fieldsMetaData,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// folders

//<es-section>

models.sequelize.folders.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.folders,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// folders_rel

//<es-section>

models.sequelize.foldersRel.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.foldersRel,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// folders_subscriptions

//<es-section>

models.sequelize.foldersSubscriptions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.foldersSubscriptions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events

//<es-section>

models.sequelize.fpEvents.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEvents,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events_audit

//<es-section>

models.sequelize.fpEventsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events_contacts_c

//<es-section>

models.sequelize.fpEventsContactsC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventsContactsC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events_fp_event_delegates_1_c

//<es-section>

models.sequelize.fpEventsFpEventDelegates1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventsFpEventDelegates1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events_fp_event_locations_1_c

//<es-section>

models.sequelize.fpEventsFpEventLocations1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventsFpEventLocations1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events_leads_1_c

//<es-section>

models.sequelize.fpEventsLeads1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventsLeads1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_events_prospects_1_c

//<es-section>

models.sequelize.fpEventsProspects1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventsProspects1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_event_locations

//<es-section>

models.sequelize.fpEventLocations.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventLocations,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_event_locations_audit

//<es-section>

models.sequelize.fpEventLocationsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventLocationsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// fp_event_locations_fp_events_1_c

//<es-section>

models.sequelize.fpEventLocationsFpEvents1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.fpEventLocationsFpEvents1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// iad_sticky_notes

//<es-section>

models.sequelize.g3lGelEmailAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.g3lGelEmailAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// iad_sticky_notes_audit

//<es-section>

models.sequelize.g3lGelWhatsapp.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.g3lGelWhatsapp,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// import_maps

//<es-section>

models.sequelize.g3lGelWhatsappAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.g3lGelWhatsappAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// inbound_email

//<es-section>

models.sequelize.iadStickyNotes.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.iadStickyNotes,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// inbound_email_autoreply

//<es-section>

models.sequelize.iadStickyNotesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.iadStickyNotesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// inbound_email_cache_ts

//<es-section>

models.sequelize.importMaps.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.importMaps,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_address_cache

//<es-section>

models.sequelize.inboundEmail.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.inboundEmail,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_address_cache_audit

//<es-section>

models.sequelize.inboundEmailAutoreply.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.inboundEmailAutoreply,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_areas

//<es-section>

models.sequelize.inboundEmailCacheTs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.inboundEmailCacheTs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_areas_audit

//<es-section>

models.sequelize.jjwgAddressCache.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgAddressCache,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_maps

//<es-section>

models.sequelize.jjwgAddressCacheAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgAddressCacheAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_maps_audit

//<es-section>

models.sequelize.jjwgAreas.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgAreas,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_maps_jjwg_areas_c

//<es-section>

models.sequelize.jjwgAreasAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgAreasAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_maps_jjwg_markers_c

//<es-section>

models.sequelize.jjwgMaps.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgMaps,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_markers

//<es-section>

models.sequelize.jjwgMapsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgMapsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// jjwg_markers_audit

//<es-section>

models.sequelize.jjwgMapsJjwgAreasC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgMapsJjwgAreasC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// job_queue

//<es-section>

models.sequelize.jjwgMapsJjwgMarkersC.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgMapsJjwgMarkersC,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// leads

//<es-section>

models.sequelize.jjwgMarkers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgMarkers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// leads_audit

//<es-section>

models.sequelize.jjwgMarkersAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jjwgMarkersAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// leads_cstm

//<es-section>

models.sequelize.jobQueue.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.jobQueue,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// leads_import

//<es-section>

models.sequelize.leads.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.leads,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// linked_documents

//<es-section>

models.sequelize.leadsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.leadsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// meetings

//<es-section>

models.sequelize.leadsCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.leadsCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// meetings_contacts

//<es-section>

models.sequelize.leadsImport.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.leadsImport,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// meetings_cstm

//<es-section>

models.sequelize.linkedDocuments.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.linkedDocuments,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// meetings_leads

//<es-section>

models.sequelize.meetings.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.meetings,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// meetings_users

//<es-section>

models.sequelize.meetingsContacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.meetingsContacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// notes

//<es-section>

models.sequelize.meetingsCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.meetingsCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// oauth2clients

//<es-section>

models.sequelize.meetingsLeads.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.meetingsLeads,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// oauth2tokens

//<es-section>

models.sequelize.meetingsUsers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.meetingsUsers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// oauth_consumer

//<es-section>

models.sequelize.notes.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.notes,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// oauth_nonce

//<es-section>

models.sequelize.oauth2clients.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.oauth2clients,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// oauth_tokens

//<es-section>

models.sequelize.oauth2tokens.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.oauth2tokens,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// opportunities

//<es-section>

models.sequelize.oauthConsumer.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.oauthConsumer,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// opportunities_audit

//<es-section>

models.sequelize.oauthNonce.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.oauthNonce,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// opportunities_contacts

//<es-section>

models.sequelize.oauthTokens.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.oauthTokens,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// opportunities_cstm

//<es-section>

models.sequelize.opportunities.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.opportunities,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// outbound_email

//<es-section>

models.sequelize.opportunitiesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.opportunitiesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// outbound_email_audit

//<es-section>

models.sequelize.opportunitiesContacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.opportunitiesContacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// pilat_dictionaries

//<es-section>

models.sequelize.opportunitiesCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.opportunitiesCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// pilat_params

//<es-section>

models.sequelize.outboundEmail.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.outboundEmail,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// project

//<es-section>

models.sequelize.outboundEmailAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.outboundEmailAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// projects_accounts

//<es-section>

models.sequelize.pilatDictionaries.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.pilatDictionaries,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// projects_bugs

//<es-section>

models.sequelize.pilatMails.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.pilatMails,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// projects_cases

//<es-section>

models.sequelize.pilatModules.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.pilatModules,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// projects_contacts

//<es-section>

models.sequelize.pilatParams.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.pilatParams,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// projects_opportunities

//<es-section>

models.sequelize.pilatViews.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.pilatViews,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// projects_products

//<es-section>

models.sequelize.project.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.project,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// project_contacts_1_c

//<es-section>

models.sequelize.projectsAccounts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectsAccounts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// project_cstm

//<es-section>

models.sequelize.projectsBugs.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectsBugs,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// project_task

//<es-section>

models.sequelize.projectsCases.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectsCases,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// project_task_audit

//<es-section>

models.sequelize.projectsContacts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectsContacts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// project_users_1_c

//<es-section>

models.sequelize.projectsOpportunities.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectsOpportunities,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// prospects

//<es-section>

models.sequelize.projectsProducts.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectsProducts,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// prospects_cstm

//<es-section>

models.sequelize.projectContacts1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectContacts1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// prospect_lists

//<es-section>

models.sequelize.projectCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// prospect_lists_prospects

//<es-section>

models.sequelize.projectTask.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectTask,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// prospect_list_campaigns

//<es-section>

models.sequelize.projectTaskAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectTaskAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// relationships

//<es-section>

models.sequelize.projectUsers1C.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.projectUsers1C,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// releases

//<es-section>

models.sequelize.prospects.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.prospects,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// reminders

//<es-section>

models.sequelize.prospectsCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.prospectsCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// reminders_invitees

//<es-section>

models.sequelize.prospectLists.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.prospectLists,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// roles

//<es-section>

models.sequelize.prospectListsProspects.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.prospectListsProspects,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// roles_modules

//<es-section>

models.sequelize.prospectListCampaigns.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.prospectListCampaigns,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// roles_users

//<es-section>

models.sequelize.relationships.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.relationships,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// sai_clientes

//<es-section>

models.sequelize.releases.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.releases,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// saved_search

//<es-section>

models.sequelize.reminders.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.reminders,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// schedulers

//<es-section>

models.sequelize.remindersInvitees.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.remindersInvitees,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// securitygroups

//<es-section>

models.sequelize.roles.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.roles,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// securitygroups_acl_roles

//<es-section>

models.sequelize.rolesModules.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.rolesModules,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// securitygroups_audit

//<es-section>

models.sequelize.rolesUsers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.rolesUsers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// securitygroups_default

//<es-section>

models.sequelize.saiClientes.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.saiClientes,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// securitygroups_records

//<es-section>

models.sequelize.savedSearch.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.savedSearch,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// securitygroups_users

//<es-section>

models.sequelize.schedulers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.schedulers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// spots

//<es-section>

models.sequelize.securitygroups.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.securitygroups,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// sugarfeed

//<es-section>

models.sequelize.securitygroupsAclRoles.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.securitygroupsAclRoles,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestionoptions

//<es-section>

models.sequelize.securitygroupsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.securitygroupsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestionoptions_audit

//<es-section>

models.sequelize.securitygroupsDefault.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.securitygroupsDefault,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestionoptions_surveyquestionresponses

//<es-section>

models.sequelize.securitygroupsRecords.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.securitygroupsRecords,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestionresponses

//<es-section>

models.sequelize.securitygroupsUsers.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.securitygroupsUsers,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestionresponses_audit

//<es-section>

models.sequelize.spots.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.spots,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestions

//<es-section>

models.sequelize.sugarfeed.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.sugarfeed,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyquestions_audit

//<es-section>

models.sequelize.surveyquestionoptions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestionoptions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyresponses

//<es-section>

models.sequelize.surveyquestionoptionsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestionoptionsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveyresponses_audit

//<es-section>

models.sequelize.surveyquestionoptionsSurveyquestionresponses.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestionoptionsSurveyquestionresponses,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveys

//<es-section>

models.sequelize.surveyquestionresponses.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestionresponses,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// surveys_audit

//<es-section>

models.sequelize.surveyquestionresponsesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestionresponsesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// tasks

//<es-section>

models.sequelize.surveyquestions.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestions,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// templatesectionline

//<es-section>

models.sequelize.surveyquestionsAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyquestionsAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// tracker

//<es-section>

models.sequelize.surveyresponses.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyresponses,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// upgrade_history

//<es-section>

models.sequelize.surveyresponsesAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveyresponsesAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// users

//<es-section>

models.sequelize.surveys.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveys,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// users_cstm

//<es-section>

models.sequelize.surveysAudit.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.surveysAudit,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// users_feeds

//<es-section>

models.sequelize.tasks.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.tasks,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// users_last_import

//<es-section>

models.sequelize.templatesectionline.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.templatesectionline,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// users_password_link

//<es-section>

models.sequelize.tracker.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.tracker,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// users_signatures

//<es-section>

models.sequelize.upgradeHistory.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.upgradeHistory,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// user_preferences

//<es-section>

models.sequelize.users.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.users,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>



// vcals

//<es-section>

models.sequelize.usersCstm.belongsTo(models.sequelize.lcObjLocalDbRelatedTableName, {foreignKey:'meeting_id', sourceKey:'id'});
models.sequelize.lcObjLocalDbRelatedTableName.hasMany(models.sequelize.usersCstm,{foreignKey:'meeting_id', sourceKey:'id'});

//</es-section>




module.exports = models;
