/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:27 GMT-0400 (Bolivia Time)
 * Time: 2:44:27
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:27 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:27
 *
 * Caution: es-sections will be replaced by script execution
 */

module.exports = function (app) {
// Routes API
    //<es-section>
	
	app.use("/", require("../routes/accounts.routes"));
	
	app.use("/", require("../routes/accounts_audit.routes"));
	
	app.use("/", require("../routes/accounts_bugs.routes"));
	
	app.use("/", require("../routes/accounts_cases.routes"));
	
	app.use("/", require("../routes/accounts_contacts.routes"));
	
	app.use("/", require("../routes/accounts_cstm.routes"));
	
	app.use("/", require("../routes/accounts_opportunities.routes"));
	
	app.use("/", require("../routes/acl_actions.routes"));
	
	app.use("/", require("../routes/acl_roles.routes"));
	
	app.use("/", require("../routes/acl_roles_actions.routes"));
	
	app.use("/", require("../routes/acl_roles_users.routes"));
	
	app.use("/", require("../routes/address_book.routes"));
	
	app.use("/", require("../routes/alerts.routes"));
	
	app.use("/", require("../routes/am_projecttemplates.routes"));
	
	app.use("/", require("../routes/am_projecttemplates_audit.routes"));
	
	app.use("/", require("../routes/am_projecttemplates_contacts_1_c.routes"));
	
	app.use("/", require("../routes/am_projecttemplates_project_1_c.routes"));
	
	app.use("/", require("../routes/am_projecttemplates_users_1_c.routes"));
	
	app.use("/", require("../routes/am_tasktemplates.routes"));
	
	app.use("/", require("../routes/am_tasktemplates_am_projecttemplates_c.routes"));
	
	app.use("/", require("../routes/am_tasktemplates_audit.routes"));
	
	app.use("/", require("../routes/analytic_reporting.routes"));
	
	app.use("/", require("../routes/aobh_businesshours.routes"));
	
	app.use("/", require("../routes/aod_index.routes"));
	
	app.use("/", require("../routes/aod_indexevent.routes"));
	
	app.use("/", require("../routes/aod_indexevent_audit.routes"));
	
	app.use("/", require("../routes/aod_index_audit.routes"));
	
	app.use("/", require("../routes/aok_knowledgebase.routes"));
	
	app.use("/", require("../routes/aok_knowledgebase_audit.routes"));
	
	app.use("/", require("../routes/aok_knowledgebase_categories.routes"));
	
	app.use("/", require("../routes/aok_knowledge_base_categories.routes"));
	
	app.use("/", require("../routes/aok_knowledge_base_categories_audit.routes"));
	
	app.use("/", require("../routes/aop_case_events.routes"));
	
	app.use("/", require("../routes/aop_case_events_audit.routes"));
	
	app.use("/", require("../routes/aop_case_updates.routes"));
	
	app.use("/", require("../routes/aop_case_updates_audit.routes"));
	
	app.use("/", require("../routes/aor_charts.routes"));
	
	app.use("/", require("../routes/aor_conditions.routes"));
	
	app.use("/", require("../routes/aor_fields.routes"));
	
	app.use("/", require("../routes/aor_reports.routes"));
	
	app.use("/", require("../routes/aor_reports_audit.routes"));
	
	app.use("/", require("../routes/aor_scheduled_reports.routes"));
	
	app.use("/", require("../routes/aos_contracts.routes"));
	
	app.use("/", require("../routes/aos_contracts_audit.routes"));
	
	app.use("/", require("../routes/aos_contracts_documents.routes"));
	
	app.use("/", require("../routes/aos_invoices.routes"));
	
	app.use("/", require("../routes/aos_invoices_audit.routes"));
	
	app.use("/", require("../routes/aos_line_item_groups.routes"));
	
	app.use("/", require("../routes/aos_line_item_groups_audit.routes"));
	
	app.use("/", require("../routes/aos_pdf_templates.routes"));
	
	app.use("/", require("../routes/aos_pdf_templates_audit.routes"));
	
	app.use("/", require("../routes/aos_products.routes"));
	
	app.use("/", require("../routes/aos_products_audit.routes"));
	
	app.use("/", require("../routes/aos_products_quotes.routes"));
	
	app.use("/", require("../routes/aos_products_quotes_audit.routes"));
	
	app.use("/", require("../routes/aos_product_categories.routes"));
	
	app.use("/", require("../routes/aos_product_categories_audit.routes"));
	
	app.use("/", require("../routes/aos_quotes.routes"));
	
	app.use("/", require("../routes/aos_quotes_aos_invoices_c.routes"));
	
	app.use("/", require("../routes/aos_quotes_audit.routes"));
	
	app.use("/", require("../routes/aos_quotes_cstm.routes"));
	
	app.use("/", require("../routes/aos_quotes_os_contracts_c.routes"));
	
	app.use("/", require("../routes/aos_quotes_project_c.routes"));
	
	app.use("/", require("../routes/aow_actions.routes"));
	
	app.use("/", require("../routes/aow_conditions.routes"));
	
	app.use("/", require("../routes/aow_processed.routes"));
	
	app.use("/", require("../routes/aow_processed_aow_actions.routes"));
	
	app.use("/", require("../routes/aow_workflow.routes"));
	
	app.use("/", require("../routes/aow_workflow_audit.routes"));
	
	app.use("/", require("../routes/bugs.routes"));
	
	app.use("/", require("../routes/bugs_audit.routes"));
	
	app.use("/", require("../routes/calls.routes"));
	
	app.use("/", require("../routes/calls_contacts.routes"));
	
	app.use("/", require("../routes/calls_cstm.routes"));
	
	app.use("/", require("../routes/calls_leads.routes"));
	
	app.use("/", require("../routes/calls_reschedule.routes"));
	
	app.use("/", require("../routes/calls_reschedule_audit.routes"));
	
	app.use("/", require("../routes/calls_users.routes"));
	
	app.use("/", require("../routes/campaigns.routes"));
	
	app.use("/", require("../routes/campaigns_audit.routes"));
	
	app.use("/", require("../routes/campaign_log.routes"));
	
	app.use("/", require("../routes/campaign_trkrs.routes"));
	
	app.use("/", require("../routes/cases.routes"));
	
	app.use("/", require("../routes/cases_audit.routes"));
	
	app.use("/", require("../routes/cases_bugs.routes"));
	
	app.use("/", require("../routes/cases_cstm.routes"));
	
	app.use("/", require("../routes/config.routes"));
	
	app.use("/", require("../routes/contacts.routes"));
	
	app.use("/", require("../routes/contacts_audit.routes"));
	
	app.use("/", require("../routes/contacts_bugs.routes"));
	
	app.use("/", require("../routes/contacts_cases.routes"));
	
	app.use("/", require("../routes/contacts_cstm.routes"));
	
	app.use("/", require("../routes/contacts_users.routes"));
	
	app.use("/", require("../routes/cron_remove_documents.routes"));
	
	app.use("/", require("../routes/currencies.routes"));
	
	app.use("/", require("../routes/custom_fields.routes"));
	
	app.use("/", require("../routes/documents.routes"));
	
	app.use("/", require("../routes/documents_accounts.routes"));
	
	app.use("/", require("../routes/documents_bugs.routes"));
	
	app.use("/", require("../routes/documents_cases.routes"));
	
	app.use("/", require("../routes/documents_contacts.routes"));
	
	app.use("/", require("../routes/documents_opportunities.routes"));
	
	app.use("/", require("../routes/document_revisions.routes"));
	
	app.use("/", require("../routes/eapm.routes"));
	
	app.use("/", require("../routes/emailman.routes"));
	
	app.use("/", require("../routes/emails.routes"));
	
	app.use("/", require("../routes/emails_beans.routes"));
	
	app.use("/", require("../routes/emails_email_addr_rel.routes"));
	
	app.use("/", require("../routes/emails_text.routes"));
	
	app.use("/", require("../routes/email_addresses.routes"));
	
	app.use("/", require("../routes/email_addresses_audit.routes"));
	
	app.use("/", require("../routes/email_addr_bean_rel.routes"));
	
	app.use("/", require("../routes/email_cache.routes"));
	
	app.use("/", require("../routes/email_marketing.routes"));
	
	app.use("/", require("../routes/email_marketing_prospect_lists.routes"));
	
	app.use("/", require("../routes/email_templates.routes"));
	
	app.use("/", require("../routes/email_templates_cstm.routes"));
	
	app.use("/", require("../routes/erp_cliente.routes"));
	
	app.use("/", require("../routes/erp_cliente_audit.routes"));
	
	app.use("/", require("../routes/favorites.routes"));
	
	app.use("/", require("../routes/fields_meta_data.routes"));
	
	app.use("/", require("../routes/folders.routes"));
	
	app.use("/", require("../routes/folders_rel.routes"));
	
	app.use("/", require("../routes/folders_subscriptions.routes"));
	
	app.use("/", require("../routes/fp_events.routes"));
	
	app.use("/", require("../routes/fp_events_audit.routes"));
	
	app.use("/", require("../routes/fp_events_contacts_c.routes"));
	
	app.use("/", require("../routes/fp_events_fp_event_delegates_1_c.routes"));
	
	app.use("/", require("../routes/fp_events_fp_event_locations_1_c.routes"));
	
	app.use("/", require("../routes/fp_events_leads_1_c.routes"));
	
	app.use("/", require("../routes/fp_events_prospects_1_c.routes"));
	
	app.use("/", require("../routes/fp_event_locations.routes"));
	
	app.use("/", require("../routes/fp_event_locations_audit.routes"));
	
	app.use("/", require("../routes/fp_event_locations_fp_events_1_c.routes"));
	
	app.use("/", require("../routes/g3l_gel_email.routes"));
	
	app.use("/", require("../routes/g3l_gel_email_audit.routes"));
	
	app.use("/", require("../routes/g3l_gel_whatsapp.routes"));
	
	app.use("/", require("../routes/g3l_gel_whatsapp_audit.routes"));
	
	app.use("/", require("../routes/iad_sticky_notes.routes"));
	
	app.use("/", require("../routes/iad_sticky_notes_audit.routes"));
	
	app.use("/", require("../routes/import_maps.routes"));
	
	app.use("/", require("../routes/inbound_email.routes"));
	
	app.use("/", require("../routes/inbound_email_autoreply.routes"));
	
	app.use("/", require("../routes/inbound_email_cache_ts.routes"));
	
	app.use("/", require("../routes/jjwg_address_cache.routes"));
	
	app.use("/", require("../routes/jjwg_address_cache_audit.routes"));
	
	app.use("/", require("../routes/jjwg_areas.routes"));
	
	app.use("/", require("../routes/jjwg_areas_audit.routes"));
	
	app.use("/", require("../routes/jjwg_maps.routes"));
	
	app.use("/", require("../routes/jjwg_maps_audit.routes"));
	
	app.use("/", require("../routes/jjwg_maps_jjwg_areas_c.routes"));
	
	app.use("/", require("../routes/jjwg_maps_jjwg_markers_c.routes"));
	
	app.use("/", require("../routes/jjwg_markers.routes"));
	
	app.use("/", require("../routes/jjwg_markers_audit.routes"));
	
	app.use("/", require("../routes/job_queue.routes"));
	
	app.use("/", require("../routes/leads.routes"));
	
	app.use("/", require("../routes/leads_audit.routes"));
	
	app.use("/", require("../routes/leads_cstm.routes"));
	
	app.use("/", require("../routes/leads_import.routes"));
	
	app.use("/", require("../routes/linked_documents.routes"));
	
	app.use("/", require("../routes/meetings.routes"));
	
	app.use("/", require("../routes/meetings_contacts.routes"));
	
	app.use("/", require("../routes/meetings_cstm.routes"));
	
	app.use("/", require("../routes/meetings_leads.routes"));
	
	app.use("/", require("../routes/meetings_users.routes"));
	
	app.use("/", require("../routes/notes.routes"));
	
	app.use("/", require("../routes/oauth2clients.routes"));
	
	app.use("/", require("../routes/oauth2tokens.routes"));
	
	app.use("/", require("../routes/oauth_consumer.routes"));
	
	app.use("/", require("../routes/oauth_nonce.routes"));
	
	app.use("/", require("../routes/oauth_tokens.routes"));
	
	app.use("/", require("../routes/opportunities.routes"));
	
	app.use("/", require("../routes/opportunities_audit.routes"));
	
	app.use("/", require("../routes/opportunities_contacts.routes"));
	
	app.use("/", require("../routes/opportunities_cstm.routes"));
	
	app.use("/", require("../routes/outbound_email.routes"));
	
	app.use("/", require("../routes/outbound_email_audit.routes"));
	
	app.use("/", require("../routes/pilat_crons.routes"));
	
	app.use("/", require("../routes/pilat_dictionaries.routes"));
	
	app.use("/", require("../routes/pilat_logs.routes"));
	
	app.use("/", require("../routes/pilat_mails.routes"));
	
	app.use("/", require("../routes/pilat_modules.routes"));
	
	app.use("/", require("../routes/pilat_params.routes"));
	
	app.use("/", require("../routes/pilat_views.routes"));
	
	app.use("/", require("../routes/project.routes"));
	
	app.use("/", require("../routes/projects_accounts.routes"));
	
	app.use("/", require("../routes/projects_bugs.routes"));
	
	app.use("/", require("../routes/projects_cases.routes"));
	
	app.use("/", require("../routes/projects_contacts.routes"));
	
	app.use("/", require("../routes/projects_opportunities.routes"));
	
	app.use("/", require("../routes/projects_products.routes"));
	
	app.use("/", require("../routes/project_contacts_1_c.routes"));
	
	app.use("/", require("../routes/project_cstm.routes"));
	
	app.use("/", require("../routes/project_task.routes"));
	
	app.use("/", require("../routes/project_task_audit.routes"));
	
	app.use("/", require("../routes/project_users_1_c.routes"));
	
	app.use("/", require("../routes/prospects.routes"));
	
	app.use("/", require("../routes/prospects_cstm.routes"));
	
	app.use("/", require("../routes/prospect_lists.routes"));
	
	app.use("/", require("../routes/prospect_lists_prospects.routes"));
	
	app.use("/", require("../routes/prospect_list_campaigns.routes"));
	
	app.use("/", require("../routes/relationships.routes"));
	
	app.use("/", require("../routes/releases.routes"));
	
	app.use("/", require("../routes/reminders.routes"));
	
	app.use("/", require("../routes/reminders_invitees.routes"));
	
	app.use("/", require("../routes/roles.routes"));
	
	app.use("/", require("../routes/roles_modules.routes"));
	
	app.use("/", require("../routes/roles_users.routes"));
	
	app.use("/", require("../routes/sai_clientes.routes"));
	
	app.use("/", require("../routes/saved_search.routes"));
	
	app.use("/", require("../routes/schedulers.routes"));
	
	app.use("/", require("../routes/securitygroups.routes"));
	
	app.use("/", require("../routes/securitygroups_acl_roles.routes"));
	
	app.use("/", require("../routes/securitygroups_audit.routes"));
	
	app.use("/", require("../routes/securitygroups_default.routes"));
	
	app.use("/", require("../routes/securitygroups_records.routes"));
	
	app.use("/", require("../routes/securitygroups_users.routes"));
	
	app.use("/", require("../routes/spots.routes"));
	
	app.use("/", require("../routes/sugarfeed.routes"));
	
	app.use("/", require("../routes/surveyquestionoptions.routes"));
	
	app.use("/", require("../routes/surveyquestionoptions_audit.routes"));
	
	app.use("/", require("../routes/surveyquestionoptions_surveyquestionresponses.routes"));
	
	app.use("/", require("../routes/surveyquestionresponses.routes"));
	
	app.use("/", require("../routes/surveyquestionresponses_audit.routes"));
	
	app.use("/", require("../routes/surveyquestions.routes"));
	
	app.use("/", require("../routes/surveyquestions_audit.routes"));
	
	app.use("/", require("../routes/surveyresponses.routes"));
	
	app.use("/", require("../routes/surveyresponses_audit.routes"));
	
	app.use("/", require("../routes/surveys.routes"));
	
	app.use("/", require("../routes/surveys_audit.routes"));
	
	app.use("/", require("../routes/tasks.routes"));
	
	app.use("/", require("../routes/templatesectionline.routes"));
	
	app.use("/", require("../routes/tracker.routes"));
	
	app.use("/", require("../routes/upgrade_history.routes"));
	
	app.use("/", require("../routes/users.routes"));
	
	app.use("/", require("../routes/users_cstm.routes"));
	
	app.use("/", require("../routes/users_feeds.routes"));
	
	app.use("/", require("../routes/users_last_import.routes"));
	
	app.use("/", require("../routes/users_password_link.routes"));
	
	app.use("/", require("../routes/users_signatures.routes"));
	
	app.use("/", require("../routes/user_preferences.routes"));
	
	app.use("/", require("../routes/vcals.routes"));
	
	//</es-section>
}
