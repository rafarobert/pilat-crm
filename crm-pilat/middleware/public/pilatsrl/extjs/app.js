/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:44:28 GMT-0400 (Bolivia Time)
 * Time: 2:44:28
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:44:28 GMT-0400 (Bolivia Time)
 * Last time updated: 2:44:28
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.application({
	name: 'es',

	views: [
		'Viewport',
		//<es-section>
	
		'accounts.List',
		'accounts.Add',
	
		'accounts_audit.List',
		'accounts_audit.Add',
	
		'accounts_bugs.List',
		'accounts_bugs.Add',
	
		'accounts_cases.List',
		'accounts_cases.Add',
	
		'accounts_contacts.List',
		'accounts_contacts.Add',
	
		'accounts_cstm.List',
		'accounts_cstm.Add',
	
		'accounts_opportunities.List',
		'accounts_opportunities.Add',
	
		'acl_actions.List',
		'acl_actions.Add',
	
		'acl_roles.List',
		'acl_roles.Add',
	
		'acl_roles_actions.List',
		'acl_roles_actions.Add',
	
		'acl_roles_users.List',
		'acl_roles_users.Add',
	
		'address_book.List',
		'address_book.Add',
	
		'alerts.List',
		'alerts.Add',
	
		'am_projecttemplates.List',
		'am_projecttemplates.Add',
	
		'am_projecttemplates_audit.List',
		'am_projecttemplates_audit.Add',
	
		'am_projecttemplates_contacts_1_c.List',
		'am_projecttemplates_contacts_1_c.Add',
	
		'am_projecttemplates_project_1_c.List',
		'am_projecttemplates_project_1_c.Add',
	
		'am_projecttemplates_users_1_c.List',
		'am_projecttemplates_users_1_c.Add',
	
		'am_tasktemplates.List',
		'am_tasktemplates.Add',
	
		'am_tasktemplates_am_projecttemplates_c.List',
		'am_tasktemplates_am_projecttemplates_c.Add',
	
		'am_tasktemplates_audit.List',
		'am_tasktemplates_audit.Add',
	
		'analytic_reporting.List',
		'analytic_reporting.Add',
	
		'aobh_businesshours.List',
		'aobh_businesshours.Add',
	
		'aod_index.List',
		'aod_index.Add',
	
		'aod_indexevent.List',
		'aod_indexevent.Add',
	
		'aod_indexevent_audit.List',
		'aod_indexevent_audit.Add',
	
		'aod_index_audit.List',
		'aod_index_audit.Add',
	
		'aok_knowledgebase.List',
		'aok_knowledgebase.Add',
	
		'aok_knowledgebase_audit.List',
		'aok_knowledgebase_audit.Add',
	
		'aok_knowledgebase_categories.List',
		'aok_knowledgebase_categories.Add',
	
		'aok_knowledge_base_categories.List',
		'aok_knowledge_base_categories.Add',
	
		'aok_knowledge_base_categories_audit.List',
		'aok_knowledge_base_categories_audit.Add',
	
		'aop_case_events.List',
		'aop_case_events.Add',
	
		'aop_case_events_audit.List',
		'aop_case_events_audit.Add',
	
		'aop_case_updates.List',
		'aop_case_updates.Add',
	
		'aop_case_updates_audit.List',
		'aop_case_updates_audit.Add',
	
		'aor_charts.List',
		'aor_charts.Add',
	
		'aor_conditions.List',
		'aor_conditions.Add',
	
		'aor_fields.List',
		'aor_fields.Add',
	
		'aor_reports.List',
		'aor_reports.Add',
	
		'aor_reports_audit.List',
		'aor_reports_audit.Add',
	
		'aor_scheduled_reports.List',
		'aor_scheduled_reports.Add',
	
		'aos_contracts.List',
		'aos_contracts.Add',
	
		'aos_contracts_audit.List',
		'aos_contracts_audit.Add',
	
		'aos_contracts_documents.List',
		'aos_contracts_documents.Add',
	
		'aos_invoices.List',
		'aos_invoices.Add',
	
		'aos_invoices_audit.List',
		'aos_invoices_audit.Add',
	
		'aos_line_item_groups.List',
		'aos_line_item_groups.Add',
	
		'aos_line_item_groups_audit.List',
		'aos_line_item_groups_audit.Add',
	
		'aos_pdf_templates.List',
		'aos_pdf_templates.Add',
	
		'aos_pdf_templates_audit.List',
		'aos_pdf_templates_audit.Add',
	
		'aos_products.List',
		'aos_products.Add',
	
		'aos_products_audit.List',
		'aos_products_audit.Add',
	
		'aos_products_quotes.List',
		'aos_products_quotes.Add',
	
		'aos_products_quotes_audit.List',
		'aos_products_quotes_audit.Add',
	
		'aos_product_categories.List',
		'aos_product_categories.Add',
	
		'aos_product_categories_audit.List',
		'aos_product_categories_audit.Add',
	
		'aos_quotes.List',
		'aos_quotes.Add',
	
		'aos_quotes_aos_invoices_c.List',
		'aos_quotes_aos_invoices_c.Add',
	
		'aos_quotes_audit.List',
		'aos_quotes_audit.Add',
	
		'aos_quotes_cstm.List',
		'aos_quotes_cstm.Add',
	
		'aos_quotes_os_contracts_c.List',
		'aos_quotes_os_contracts_c.Add',
	
		'aos_quotes_project_c.List',
		'aos_quotes_project_c.Add',
	
		'aow_actions.List',
		'aow_actions.Add',
	
		'aow_conditions.List',
		'aow_conditions.Add',
	
		'aow_processed.List',
		'aow_processed.Add',
	
		'aow_processed_aow_actions.List',
		'aow_processed_aow_actions.Add',
	
		'aow_workflow.List',
		'aow_workflow.Add',
	
		'aow_workflow_audit.List',
		'aow_workflow_audit.Add',
	
		'bugs.List',
		'bugs.Add',
	
		'bugs_audit.List',
		'bugs_audit.Add',
	
		'calls.List',
		'calls.Add',
	
		'calls_contacts.List',
		'calls_contacts.Add',
	
		'calls_cstm.List',
		'calls_cstm.Add',
	
		'calls_leads.List',
		'calls_leads.Add',
	
		'calls_reschedule.List',
		'calls_reschedule.Add',
	
		'calls_reschedule_audit.List',
		'calls_reschedule_audit.Add',
	
		'calls_users.List',
		'calls_users.Add',
	
		'campaigns.List',
		'campaigns.Add',
	
		'campaigns_audit.List',
		'campaigns_audit.Add',
	
		'campaign_log.List',
		'campaign_log.Add',
	
		'campaign_trkrs.List',
		'campaign_trkrs.Add',
	
		'cases.List',
		'cases.Add',
	
		'cases_audit.List',
		'cases_audit.Add',
	
		'cases_bugs.List',
		'cases_bugs.Add',
	
		'cases_cstm.List',
		'cases_cstm.Add',
	
		'config.List',
		'config.Add',
	
		'contacts.List',
		'contacts.Add',
	
		'contacts_audit.List',
		'contacts_audit.Add',
	
		'contacts_bugs.List',
		'contacts_bugs.Add',
	
		'contacts_cases.List',
		'contacts_cases.Add',
	
		'contacts_cstm.List',
		'contacts_cstm.Add',
	
		'contacts_users.List',
		'contacts_users.Add',
	
		'cron_remove_documents.List',
		'cron_remove_documents.Add',
	
		'currencies.List',
		'currencies.Add',
	
		'custom_fields.List',
		'custom_fields.Add',
	
		'documents.List',
		'documents.Add',
	
		'documents_accounts.List',
		'documents_accounts.Add',
	
		'documents_bugs.List',
		'documents_bugs.Add',
	
		'documents_cases.List',
		'documents_cases.Add',
	
		'documents_contacts.List',
		'documents_contacts.Add',
	
		'documents_opportunities.List',
		'documents_opportunities.Add',
	
		'document_revisions.List',
		'document_revisions.Add',
	
		'eapm.List',
		'eapm.Add',
	
		'emailman.List',
		'emailman.Add',
	
		'emails.List',
		'emails.Add',
	
		'emails_beans.List',
		'emails_beans.Add',
	
		'emails_email_addr_rel.List',
		'emails_email_addr_rel.Add',
	
		'emails_text.List',
		'emails_text.Add',
	
		'email_addresses.List',
		'email_addresses.Add',
	
		'email_addresses_audit.List',
		'email_addresses_audit.Add',
	
		'email_addr_bean_rel.List',
		'email_addr_bean_rel.Add',
	
		'email_cache.List',
		'email_cache.Add',
	
		'email_marketing.List',
		'email_marketing.Add',
	
		'email_marketing_prospect_lists.List',
		'email_marketing_prospect_lists.Add',
	
		'email_templates.List',
		'email_templates.Add',
	
		'email_templates_cstm.List',
		'email_templates_cstm.Add',
	
		'erp_cliente.List',
		'erp_cliente.Add',
	
		'erp_cliente_audit.List',
		'erp_cliente_audit.Add',
	
		'favorites.List',
		'favorites.Add',
	
		'fields_meta_data.List',
		'fields_meta_data.Add',
	
		'folders.List',
		'folders.Add',
	
		'folders_rel.List',
		'folders_rel.Add',
	
		'folders_subscriptions.List',
		'folders_subscriptions.Add',
	
		'fp_events.List',
		'fp_events.Add',
	
		'fp_events_audit.List',
		'fp_events_audit.Add',
	
		'fp_events_contacts_c.List',
		'fp_events_contacts_c.Add',
	
		'fp_events_fp_event_delegates_1_c.List',
		'fp_events_fp_event_delegates_1_c.Add',
	
		'fp_events_fp_event_locations_1_c.List',
		'fp_events_fp_event_locations_1_c.Add',
	
		'fp_events_leads_1_c.List',
		'fp_events_leads_1_c.Add',
	
		'fp_events_prospects_1_c.List',
		'fp_events_prospects_1_c.Add',
	
		'fp_event_locations.List',
		'fp_event_locations.Add',
	
		'fp_event_locations_audit.List',
		'fp_event_locations_audit.Add',
	
		'fp_event_locations_fp_events_1_c.List',
		'fp_event_locations_fp_events_1_c.Add',
	
		'g3l_gel_whatsapp.List',
		'g3l_gel_whatsapp.Add',
	
		'g3l_gel_whatsapp_audit.List',
		'g3l_gel_whatsapp_audit.Add',
	
		'iad_sticky_notes.List',
		'iad_sticky_notes.Add',
	
		'iad_sticky_notes_audit.List',
		'iad_sticky_notes_audit.Add',
	
		'import_maps.List',
		'import_maps.Add',
	
		'inbound_email.List',
		'inbound_email.Add',
	
		'inbound_email_autoreply.List',
		'inbound_email_autoreply.Add',
	
		'inbound_email_cache_ts.List',
		'inbound_email_cache_ts.Add',
	
		'jjwg_address_cache.List',
		'jjwg_address_cache.Add',
	
		'jjwg_address_cache_audit.List',
		'jjwg_address_cache_audit.Add',
	
		'jjwg_areas.List',
		'jjwg_areas.Add',
	
		'jjwg_areas_audit.List',
		'jjwg_areas_audit.Add',
	
		'jjwg_maps.List',
		'jjwg_maps.Add',
	
		'jjwg_maps_audit.List',
		'jjwg_maps_audit.Add',
	
		'jjwg_maps_jjwg_areas_c.List',
		'jjwg_maps_jjwg_areas_c.Add',
	
		'jjwg_maps_jjwg_markers_c.List',
		'jjwg_maps_jjwg_markers_c.Add',
	
		'jjwg_markers.List',
		'jjwg_markers.Add',
	
		'jjwg_markers_audit.List',
		'jjwg_markers_audit.Add',
	
		'job_queue.List',
		'job_queue.Add',
	
		'leads.List',
		'leads.Add',
	
		'leads_audit.List',
		'leads_audit.Add',
	
		'leads_cstm.List',
		'leads_cstm.Add',
	
		'leads_import.List',
		'leads_import.Add',
	
		'linked_documents.List',
		'linked_documents.Add',
	
		'meetings.List',
		'meetings.Add',
	
		'meetings_contacts.List',
		'meetings_contacts.Add',
	
		'meetings_cstm.List',
		'meetings_cstm.Add',
	
		'meetings_leads.List',
		'meetings_leads.Add',
	
		'meetings_users.List',
		'meetings_users.Add',
	
		'notes.List',
		'notes.Add',
	
		'oauth2clients.List',
		'oauth2clients.Add',
	
		'oauth2tokens.List',
		'oauth2tokens.Add',
	
		'oauth_consumer.List',
		'oauth_consumer.Add',
	
		'oauth_nonce.List',
		'oauth_nonce.Add',
	
		'oauth_tokens.List',
		'oauth_tokens.Add',
	
		'opportunities.List',
		'opportunities.Add',
	
		'opportunities_audit.List',
		'opportunities_audit.Add',
	
		'opportunities_contacts.List',
		'opportunities_contacts.Add',
	
		'opportunities_cstm.List',
		'opportunities_cstm.Add',
	
		'outbound_email.List',
		'outbound_email.Add',
	
		'outbound_email_audit.List',
		'outbound_email_audit.Add',
	
		'pilat_dictionaries.List',
		'pilat_dictionaries.Add',
	
		'pilat_mails.List',
		'pilat_mails.Add',
	
		'pilat_modules.List',
		'pilat_modules.Add',
	
		'pilat_params.List',
		'pilat_params.Add',
	
		'pilat_views.List',
		'pilat_views.Add',
	
		'project.List',
		'project.Add',
	
		'projects_accounts.List',
		'projects_accounts.Add',
	
		'projects_bugs.List',
		'projects_bugs.Add',
	
		'projects_cases.List',
		'projects_cases.Add',
	
		'projects_contacts.List',
		'projects_contacts.Add',
	
		'projects_opportunities.List',
		'projects_opportunities.Add',
	
		'projects_products.List',
		'projects_products.Add',
	
		'project_contacts_1_c.List',
		'project_contacts_1_c.Add',
	
		'project_cstm.List',
		'project_cstm.Add',
	
		'project_task.List',
		'project_task.Add',
	
		'project_task_audit.List',
		'project_task_audit.Add',
	
		'project_users_1_c.List',
		'project_users_1_c.Add',
	
		'prospects.List',
		'prospects.Add',
	
		'prospects_cstm.List',
		'prospects_cstm.Add',
	
		'prospect_lists.List',
		'prospect_lists.Add',
	
		'prospect_lists_prospects.List',
		'prospect_lists_prospects.Add',
	
		'prospect_list_campaigns.List',
		'prospect_list_campaigns.Add',
	
		'relationships.List',
		'relationships.Add',
	
		'releases.List',
		'releases.Add',
	
		'reminders.List',
		'reminders.Add',
	
		'reminders_invitees.List',
		'reminders_invitees.Add',
	
		'roles.List',
		'roles.Add',
	
		'roles_modules.List',
		'roles_modules.Add',
	
		'roles_users.List',
		'roles_users.Add',
	
		'sai_clientes.List',
		'sai_clientes.Add',
	
		'saved_search.List',
		'saved_search.Add',
	
		'schedulers.List',
		'schedulers.Add',
	
		'securitygroups.List',
		'securitygroups.Add',
	
		'securitygroups_acl_roles.List',
		'securitygroups_acl_roles.Add',
	
		'securitygroups_audit.List',
		'securitygroups_audit.Add',
	
		'securitygroups_default.List',
		'securitygroups_default.Add',
	
		'securitygroups_records.List',
		'securitygroups_records.Add',
	
		'securitygroups_users.List',
		'securitygroups_users.Add',
	
		'spots.List',
		'spots.Add',
	
		'sugarfeed.List',
		'sugarfeed.Add',
	
		'surveyquestionoptions.List',
		'surveyquestionoptions.Add',
	
		'surveyquestionoptions_audit.List',
		'surveyquestionoptions_audit.Add',
	
		'surveyquestionoptions_surveyquestionresponses.List',
		'surveyquestionoptions_surveyquestionresponses.Add',
	
		'surveyquestionresponses.List',
		'surveyquestionresponses.Add',
	
		'surveyquestionresponses_audit.List',
		'surveyquestionresponses_audit.Add',
	
		'surveyquestions.List',
		'surveyquestions.Add',
	
		'surveyquestions_audit.List',
		'surveyquestions_audit.Add',
	
		'surveyresponses.List',
		'surveyresponses.Add',
	
		'surveyresponses_audit.List',
		'surveyresponses_audit.Add',
	
		'surveys.List',
		'surveys.Add',
	
		'surveys_audit.List',
		'surveys_audit.Add',
	
		'tasks.List',
		'tasks.Add',
	
		'templatesectionline.List',
		'templatesectionline.Add',
	
		'tracker.List',
		'tracker.Add',
	
		'upgrade_history.List',
		'upgrade_history.Add',
	
		'users.List',
		'users.Add',
	
		'users_cstm.List',
		'users_cstm.Add',
	
		'users_feeds.List',
		'users_feeds.Add',
	
		'users_last_import.List',
		'users_last_import.Add',
	
		'users_password_link.List',
		'users_password_link.Add',
	
		'users_signatures.List',
		'users_signatures.Add',
	
		'user_preferences.List',
		'user_preferences.Add',
	
		'vcals.List',
		'vcals.Add',
	
		//</es-section>
	],

	controllers: [
		'Main',
		//<es-section>
		
		'accounts',
		
		'accounts_audit',
		
		'accounts_bugs',
		
		'accounts_cases',
		
		'accounts_contacts',
		
		'accounts_cstm',
		
		'accounts_opportunities',
		
		'acl_actions',
		
		'acl_roles',
		
		'acl_roles_actions',
		
		'acl_roles_users',
		
		'address_book',
		
		'alerts',
		
		'am_projecttemplates',
		
		'am_projecttemplates_audit',
		
		'am_projecttemplates_contacts_1_c',
		
		'am_projecttemplates_project_1_c',
		
		'am_projecttemplates_users_1_c',
		
		'am_tasktemplates',
		
		'am_tasktemplates_am_projecttemplates_c',
		
		'am_tasktemplates_audit',
		
		'analytic_reporting',
		
		'aobh_businesshours',
		
		'aod_index',
		
		'aod_indexevent',
		
		'aod_indexevent_audit',
		
		'aod_index_audit',
		
		'aok_knowledgebase',
		
		'aok_knowledgebase_audit',
		
		'aok_knowledgebase_categories',
		
		'aok_knowledge_base_categories',
		
		'aok_knowledge_base_categories_audit',
		
		'aop_case_events',
		
		'aop_case_events_audit',
		
		'aop_case_updates',
		
		'aop_case_updates_audit',
		
		'aor_charts',
		
		'aor_conditions',
		
		'aor_fields',
		
		'aor_reports',
		
		'aor_reports_audit',
		
		'aor_scheduled_reports',
		
		'aos_contracts',
		
		'aos_contracts_audit',
		
		'aos_contracts_documents',
		
		'aos_invoices',
		
		'aos_invoices_audit',
		
		'aos_line_item_groups',
		
		'aos_line_item_groups_audit',
		
		'aos_pdf_templates',
		
		'aos_pdf_templates_audit',
		
		'aos_products',
		
		'aos_products_audit',
		
		'aos_products_quotes',
		
		'aos_products_quotes_audit',
		
		'aos_product_categories',
		
		'aos_product_categories_audit',
		
		'aos_quotes',
		
		'aos_quotes_aos_invoices_c',
		
		'aos_quotes_audit',
		
		'aos_quotes_cstm',
		
		'aos_quotes_os_contracts_c',
		
		'aos_quotes_project_c',
		
		'aow_actions',
		
		'aow_conditions',
		
		'aow_processed',
		
		'aow_processed_aow_actions',
		
		'aow_workflow',
		
		'aow_workflow_audit',
		
		'bugs',
		
		'bugs_audit',
		
		'calls',
		
		'calls_contacts',
		
		'calls_cstm',
		
		'calls_leads',
		
		'calls_reschedule',
		
		'calls_reschedule_audit',
		
		'calls_users',
		
		'campaigns',
		
		'campaigns_audit',
		
		'campaign_log',
		
		'campaign_trkrs',
		
		'cases',
		
		'cases_audit',
		
		'cases_bugs',
		
		'cases_cstm',
		
		'config',
		
		'contacts',
		
		'contacts_audit',
		
		'contacts_bugs',
		
		'contacts_cases',
		
		'contacts_cstm',
		
		'contacts_users',
		
		'cron_remove_documents',
		
		'currencies',
		
		'custom_fields',
		
		'documents',
		
		'documents_accounts',
		
		'documents_bugs',
		
		'documents_cases',
		
		'documents_contacts',
		
		'documents_opportunities',
		
		'document_revisions',
		
		'eapm',
		
		'emailman',
		
		'emails',
		
		'emails_beans',
		
		'emails_email_addr_rel',
		
		'emails_text',
		
		'email_addresses',
		
		'email_addresses_audit',
		
		'email_addr_bean_rel',
		
		'email_cache',
		
		'email_marketing',
		
		'email_marketing_prospect_lists',
		
		'email_templates',
		
		'email_templates_cstm',
		
		'erp_cliente',
		
		'erp_cliente_audit',
		
		'favorites',
		
		'fields_meta_data',
		
		'folders',
		
		'folders_rel',
		
		'folders_subscriptions',
		
		'fp_events',
		
		'fp_events_audit',
		
		'fp_events_contacts_c',
		
		'fp_events_fp_event_delegates_1_c',
		
		'fp_events_fp_event_locations_1_c',
		
		'fp_events_leads_1_c',
		
		'fp_events_prospects_1_c',
		
		'fp_event_locations',
		
		'fp_event_locations_audit',
		
		'fp_event_locations_fp_events_1_c',
		
		'g3l_gel_whatsapp',
		
		'g3l_gel_whatsapp_audit',
		
		'iad_sticky_notes',
		
		'iad_sticky_notes_audit',
		
		'import_maps',
		
		'inbound_email',
		
		'inbound_email_autoreply',
		
		'inbound_email_cache_ts',
		
		'jjwg_address_cache',
		
		'jjwg_address_cache_audit',
		
		'jjwg_areas',
		
		'jjwg_areas_audit',
		
		'jjwg_maps',
		
		'jjwg_maps_audit',
		
		'jjwg_maps_jjwg_areas_c',
		
		'jjwg_maps_jjwg_markers_c',
		
		'jjwg_markers',
		
		'jjwg_markers_audit',
		
		'job_queue',
		
		'leads',
		
		'leads_audit',
		
		'leads_cstm',
		
		'leads_import',
		
		'linked_documents',
		
		'meetings',
		
		'meetings_contacts',
		
		'meetings_cstm',
		
		'meetings_leads',
		
		'meetings_users',
		
		'notes',
		
		'oauth2clients',
		
		'oauth2tokens',
		
		'oauth_consumer',
		
		'oauth_nonce',
		
		'oauth_tokens',
		
		'opportunities',
		
		'opportunities_audit',
		
		'opportunities_contacts',
		
		'opportunities_cstm',
		
		'outbound_email',
		
		'outbound_email_audit',
		
		'pilat_dictionaries',
		
		'pilat_mails',
		
		'pilat_modules',
		
		'pilat_params',
		
		'pilat_views',
		
		'project',
		
		'projects_accounts',
		
		'projects_bugs',
		
		'projects_cases',
		
		'projects_contacts',
		
		'projects_opportunities',
		
		'projects_products',
		
		'project_contacts_1_c',
		
		'project_cstm',
		
		'project_task',
		
		'project_task_audit',
		
		'project_users_1_c',
		
		'prospects',
		
		'prospects_cstm',
		
		'prospect_lists',
		
		'prospect_lists_prospects',
		
		'prospect_list_campaigns',
		
		'relationships',
		
		'releases',
		
		'reminders',
		
		'reminders_invitees',
		
		'roles',
		
		'roles_modules',
		
		'roles_users',
		
		'sai_clientes',
		
		'saved_search',
		
		'schedulers',
		
		'securitygroups',
		
		'securitygroups_acl_roles',
		
		'securitygroups_audit',
		
		'securitygroups_default',
		
		'securitygroups_records',
		
		'securitygroups_users',
		
		'spots',
		
		'sugarfeed',
		
		'surveyquestionoptions',
		
		'surveyquestionoptions_audit',
		
		'surveyquestionoptions_surveyquestionresponses',
		
		'surveyquestionresponses',
		
		'surveyquestionresponses_audit',
		
		'surveyquestions',
		
		'surveyquestions_audit',
		
		'surveyresponses',
		
		'surveyresponses_audit',
		
		'surveys',
		
		'surveys_audit',
		
		'tasks',
		
		'templatesectionline',
		
		'tracker',
		
		'upgrade_history',
		
		'users',
		
		'users_cstm',
		
		'users_feeds',
		
		'users_last_import',
		
		'users_password_link',
		
		'users_signatures',
		
		'user_preferences',
		
		'vcals',
		
		//</es-section>
	],

	stores: [
		//<es-section>
		
		'accounts',
		
		'accounts_audit',
		
		'accounts_bugs',
		
		'accounts_cases',
		
		'accounts_contacts',
		
		'accounts_cstm',
		
		'accounts_opportunities',
		
		'acl_actions',
		
		'acl_roles',
		
		'acl_roles_actions',
		
		'acl_roles_users',
		
		'address_book',
		
		'alerts',
		
		'am_projecttemplates',
		
		'am_projecttemplates_audit',
		
		'am_projecttemplates_contacts_1_c',
		
		'am_projecttemplates_project_1_c',
		
		'am_projecttemplates_users_1_c',
		
		'am_tasktemplates',
		
		'am_tasktemplates_am_projecttemplates_c',
		
		'am_tasktemplates_audit',
		
		'analytic_reporting',
		
		'aobh_businesshours',
		
		'aod_index',
		
		'aod_indexevent',
		
		'aod_indexevent_audit',
		
		'aod_index_audit',
		
		'aok_knowledgebase',
		
		'aok_knowledgebase_audit',
		
		'aok_knowledgebase_categories',
		
		'aok_knowledge_base_categories',
		
		'aok_knowledge_base_categories_audit',
		
		'aop_case_events',
		
		'aop_case_events_audit',
		
		'aop_case_updates',
		
		'aop_case_updates_audit',
		
		'aor_charts',
		
		'aor_conditions',
		
		'aor_fields',
		
		'aor_reports',
		
		'aor_reports_audit',
		
		'aor_scheduled_reports',
		
		'aos_contracts',
		
		'aos_contracts_audit',
		
		'aos_contracts_documents',
		
		'aos_invoices',
		
		'aos_invoices_audit',
		
		'aos_line_item_groups',
		
		'aos_line_item_groups_audit',
		
		'aos_pdf_templates',
		
		'aos_pdf_templates_audit',
		
		'aos_products',
		
		'aos_products_audit',
		
		'aos_products_quotes',
		
		'aos_products_quotes_audit',
		
		'aos_product_categories',
		
		'aos_product_categories_audit',
		
		'aos_quotes',
		
		'aos_quotes_aos_invoices_c',
		
		'aos_quotes_audit',
		
		'aos_quotes_cstm',
		
		'aos_quotes_os_contracts_c',
		
		'aos_quotes_project_c',
		
		'aow_actions',
		
		'aow_conditions',
		
		'aow_processed',
		
		'aow_processed_aow_actions',
		
		'aow_workflow',
		
		'aow_workflow_audit',
		
		'bugs',
		
		'bugs_audit',
		
		'calls',
		
		'calls_contacts',
		
		'calls_cstm',
		
		'calls_leads',
		
		'calls_reschedule',
		
		'calls_reschedule_audit',
		
		'calls_users',
		
		'campaigns',
		
		'campaigns_audit',
		
		'campaign_log',
		
		'campaign_trkrs',
		
		'cases',
		
		'cases_audit',
		
		'cases_bugs',
		
		'cases_cstm',
		
		'config',
		
		'contacts',
		
		'contacts_audit',
		
		'contacts_bugs',
		
		'contacts_cases',
		
		'contacts_cstm',
		
		'contacts_users',
		
		'cron_remove_documents',
		
		'currencies',
		
		'custom_fields',
		
		'documents',
		
		'documents_accounts',
		
		'documents_bugs',
		
		'documents_cases',
		
		'documents_contacts',
		
		'documents_opportunities',
		
		'document_revisions',
		
		'eapm',
		
		'emailman',
		
		'emails',
		
		'emails_beans',
		
		'emails_email_addr_rel',
		
		'emails_text',
		
		'email_addresses',
		
		'email_addresses_audit',
		
		'email_addr_bean_rel',
		
		'email_cache',
		
		'email_marketing',
		
		'email_marketing_prospect_lists',
		
		'email_templates',
		
		'email_templates_cstm',
		
		'erp_cliente',
		
		'erp_cliente_audit',
		
		'favorites',
		
		'fields_meta_data',
		
		'folders',
		
		'folders_rel',
		
		'folders_subscriptions',
		
		'fp_events',
		
		'fp_events_audit',
		
		'fp_events_contacts_c',
		
		'fp_events_fp_event_delegates_1_c',
		
		'fp_events_fp_event_locations_1_c',
		
		'fp_events_leads_1_c',
		
		'fp_events_prospects_1_c',
		
		'fp_event_locations',
		
		'fp_event_locations_audit',
		
		'fp_event_locations_fp_events_1_c',
		
		'g3l_gel_whatsapp',
		
		'g3l_gel_whatsapp_audit',
		
		'iad_sticky_notes',
		
		'iad_sticky_notes_audit',
		
		'import_maps',
		
		'inbound_email',
		
		'inbound_email_autoreply',
		
		'inbound_email_cache_ts',
		
		'jjwg_address_cache',
		
		'jjwg_address_cache_audit',
		
		'jjwg_areas',
		
		'jjwg_areas_audit',
		
		'jjwg_maps',
		
		'jjwg_maps_audit',
		
		'jjwg_maps_jjwg_areas_c',
		
		'jjwg_maps_jjwg_markers_c',
		
		'jjwg_markers',
		
		'jjwg_markers_audit',
		
		'job_queue',
		
		'leads',
		
		'leads_audit',
		
		'leads_cstm',
		
		'leads_import',
		
		'linked_documents',
		
		'meetings',
		
		'meetings_contacts',
		
		'meetings_cstm',
		
		'meetings_leads',
		
		'meetings_users',
		
		'notes',
		
		'oauth2clients',
		
		'oauth2tokens',
		
		'oauth_consumer',
		
		'oauth_nonce',
		
		'oauth_tokens',
		
		'opportunities',
		
		'opportunities_audit',
		
		'opportunities_contacts',
		
		'opportunities_cstm',
		
		'outbound_email',
		
		'outbound_email_audit',
		
		'pilat_dictionaries',
		
		'pilat_mails',
		
		'pilat_modules',
		
		'pilat_params',
		
		'pilat_views',
		
		'project',
		
		'projects_accounts',
		
		'projects_bugs',
		
		'projects_cases',
		
		'projects_contacts',
		
		'projects_opportunities',
		
		'projects_products',
		
		'project_contacts_1_c',
		
		'project_cstm',
		
		'project_task',
		
		'project_task_audit',
		
		'project_users_1_c',
		
		'prospects',
		
		'prospects_cstm',
		
		'prospect_lists',
		
		'prospect_lists_prospects',
		
		'prospect_list_campaigns',
		
		'relationships',
		
		'releases',
		
		'reminders',
		
		'reminders_invitees',
		
		'roles',
		
		'roles_modules',
		
		'roles_users',
		
		'sai_clientes',
		
		'saved_search',
		
		'schedulers',
		
		'securitygroups',
		
		'securitygroups_acl_roles',
		
		'securitygroups_audit',
		
		'securitygroups_default',
		
		'securitygroups_records',
		
		'securitygroups_users',
		
		'spots',
		
		'sugarfeed',
		
		'surveyquestionoptions',
		
		'surveyquestionoptions_audit',
		
		'surveyquestionoptions_surveyquestionresponses',
		
		'surveyquestionresponses',
		
		'surveyquestionresponses_audit',
		
		'surveyquestions',
		
		'surveyquestions_audit',
		
		'surveyresponses',
		
		'surveyresponses_audit',
		
		'surveys',
		
		'surveys_audit',
		
		'tasks',
		
		'templatesectionline',
		
		'tracker',
		
		'upgrade_history',
		
		'users',
		
		'users_cstm',
		
		'users_feeds',
		
		'users_last_import',
		
		'users_password_link',
		
		'users_signatures',
		
		'user_preferences',
		
		'vcals',
		
		//</es-section>
	],

	autoCreateViewport: true
});

function initTable(table){
	let tab;
	let newTab;
	let tabs = Ext.getCmp('content-panel');
	if(tab = tabs.items.items.find(element => element.id == table)){
		Ext.getCmp('content-panel').setActiveTab(tab);
	} else {
		switch (table) {
			//<es-section>
			
			case 'accounts':
				newTab = {
					xtype: 'accountsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'accounts-audit':
				newTab = {
					xtype: 'accountsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'accounts-bugs':
				newTab = {
					xtype: 'accountsBugsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'accounts-cases':
				newTab = {
					xtype: 'accountsCasesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'accounts-contacts':
				newTab = {
					xtype: 'accountsContactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'accounts-cstm':
				newTab = {
					xtype: 'accountsCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'accounts-opportunities':
				newTab = {
					xtype: 'accountsOpportunitiesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'acl-actions':
				newTab = {
					xtype: 'aclActionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'acl-roles':
				newTab = {
					xtype: 'aclRolesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'acl-roles-actions':
				newTab = {
					xtype: 'aclRolesActionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'acl-roles-users':
				newTab = {
					xtype: 'aclRolesUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'address-book':
				newTab = {
					xtype: 'addressBookList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'alerts':
				newTab = {
					xtype: 'alertsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-projecttemplates':
				newTab = {
					xtype: 'amProjecttemplatesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-projecttemplates-audit':
				newTab = {
					xtype: 'amProjecttemplatesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-projecttemplates-contacts-1-c':
				newTab = {
					xtype: 'amProjecttemplatesContacts1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-projecttemplates-project-1-c':
				newTab = {
					xtype: 'amProjecttemplatesProject1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-projecttemplates-users-1-c':
				newTab = {
					xtype: 'amProjecttemplatesUsers1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-tasktemplates':
				newTab = {
					xtype: 'amTasktemplatesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-tasktemplates-am-projecttemplates-c':
				newTab = {
					xtype: 'amTasktemplatesAmProjecttemplatesCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'am-tasktemplates-audit':
				newTab = {
					xtype: 'amTasktemplatesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'analytic-reporting':
				newTab = {
					xtype: 'analyticReportingList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aobh-businesshours':
				newTab = {
					xtype: 'aobhBusinesshoursList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aod-index':
				newTab = {
					xtype: 'aodIndexList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aod-indexevent':
				newTab = {
					xtype: 'aodIndexeventList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aod-indexevent-audit':
				newTab = {
					xtype: 'aodIndexeventAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aod-index-audit':
				newTab = {
					xtype: 'aodIndexAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aok-knowledgebase':
				newTab = {
					xtype: 'aokKnowledgebaseList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aok-knowledgebase-audit':
				newTab = {
					xtype: 'aokKnowledgebaseAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aok-knowledgebase-categories':
				newTab = {
					xtype: 'aokKnowledgebaseCategoriesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aok-knowledge-base-categories':
				newTab = {
					xtype: 'aokKnowledgeBaseCategoriesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aok-knowledge-base-categories-audit':
				newTab = {
					xtype: 'aokKnowledgeBaseCategoriesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aop-case-events':
				newTab = {
					xtype: 'aopCaseEventsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aop-case-events-audit':
				newTab = {
					xtype: 'aopCaseEventsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aop-case-updates':
				newTab = {
					xtype: 'aopCaseUpdatesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aop-case-updates-audit':
				newTab = {
					xtype: 'aopCaseUpdatesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aor-charts':
				newTab = {
					xtype: 'aorChartsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aor-conditions':
				newTab = {
					xtype: 'aorConditionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aor-fields':
				newTab = {
					xtype: 'aorFieldsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aor-reports':
				newTab = {
					xtype: 'aorReportsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aor-reports-audit':
				newTab = {
					xtype: 'aorReportsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aor-scheduled-reports':
				newTab = {
					xtype: 'aorScheduledReportsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-contracts':
				newTab = {
					xtype: 'aosContractsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-contracts-audit':
				newTab = {
					xtype: 'aosContractsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-contracts-documents':
				newTab = {
					xtype: 'aosContractsDocumentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-invoices':
				newTab = {
					xtype: 'aosInvoicesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-invoices-audit':
				newTab = {
					xtype: 'aosInvoicesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-line-item-groups':
				newTab = {
					xtype: 'aosLineItemGroupsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-line-item-groups-audit':
				newTab = {
					xtype: 'aosLineItemGroupsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-pdf-templates':
				newTab = {
					xtype: 'aosPdfTemplatesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-pdf-templates-audit':
				newTab = {
					xtype: 'aosPdfTemplatesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-products':
				newTab = {
					xtype: 'aosProductsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-products-audit':
				newTab = {
					xtype: 'aosProductsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-products-quotes':
				newTab = {
					xtype: 'aosProductsQuotesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-products-quotes-audit':
				newTab = {
					xtype: 'aosProductsQuotesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-product-categories':
				newTab = {
					xtype: 'aosProductCategoriesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-product-categories-audit':
				newTab = {
					xtype: 'aosProductCategoriesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-quotes':
				newTab = {
					xtype: 'aosQuotesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-quotes-aos-invoices-c':
				newTab = {
					xtype: 'aosQuotesAosInvoicesCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-quotes-audit':
				newTab = {
					xtype: 'aosQuotesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-quotes-cstm':
				newTab = {
					xtype: 'aosQuotesCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-quotes-os-contracts-c':
				newTab = {
					xtype: 'aosQuotesOsContractsCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aos-quotes-project-c':
				newTab = {
					xtype: 'aosQuotesProjectCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aow-actions':
				newTab = {
					xtype: 'aowActionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aow-conditions':
				newTab = {
					xtype: 'aowConditionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aow-processed':
				newTab = {
					xtype: 'aowProcessedList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aow-processed-aow-actions':
				newTab = {
					xtype: 'aowProcessedAowActionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aow-workflow':
				newTab = {
					xtype: 'aowWorkflowList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'aow-workflow-audit':
				newTab = {
					xtype: 'aowWorkflowAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'bugs':
				newTab = {
					xtype: 'bugsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'bugs-audit':
				newTab = {
					xtype: 'bugsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls':
				newTab = {
					xtype: 'callsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls-contacts':
				newTab = {
					xtype: 'callsContactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls-cstm':
				newTab = {
					xtype: 'callsCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls-leads':
				newTab = {
					xtype: 'callsLeadsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls-reschedule':
				newTab = {
					xtype: 'callsRescheduleList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls-reschedule-audit':
				newTab = {
					xtype: 'callsRescheduleAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'calls-users':
				newTab = {
					xtype: 'callsUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'campaigns':
				newTab = {
					xtype: 'campaignsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'campaigns-audit':
				newTab = {
					xtype: 'campaignsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'campaign-log':
				newTab = {
					xtype: 'campaignLogList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'campaign-trkrs':
				newTab = {
					xtype: 'campaignTrkrsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'cases':
				newTab = {
					xtype: 'casesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'cases-audit':
				newTab = {
					xtype: 'casesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'cases-bugs':
				newTab = {
					xtype: 'casesBugsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'cases-cstm':
				newTab = {
					xtype: 'casesCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'config':
				newTab = {
					xtype: 'configList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'contacts':
				newTab = {
					xtype: 'contactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'contacts-audit':
				newTab = {
					xtype: 'contactsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'contacts-bugs':
				newTab = {
					xtype: 'contactsBugsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'contacts-cases':
				newTab = {
					xtype: 'contactsCasesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'contacts-cstm':
				newTab = {
					xtype: 'contactsCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'contacts-users':
				newTab = {
					xtype: 'contactsUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'cron-remove-documents':
				newTab = {
					xtype: 'cronRemoveDocumentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'currencies':
				newTab = {
					xtype: 'currenciesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'custom-fields':
				newTab = {
					xtype: 'customFieldsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'documents':
				newTab = {
					xtype: 'documentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'documents-accounts':
				newTab = {
					xtype: 'documentsAccountsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'documents-bugs':
				newTab = {
					xtype: 'documentsBugsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'documents-cases':
				newTab = {
					xtype: 'documentsCasesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'documents-contacts':
				newTab = {
					xtype: 'documentsContactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'documents-opportunities':
				newTab = {
					xtype: 'documentsOpportunitiesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'document-revisions':
				newTab = {
					xtype: 'documentRevisionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'eapm':
				newTab = {
					xtype: 'eapmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'emailman':
				newTab = {
					xtype: 'emailmanList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'emails':
				newTab = {
					xtype: 'emailsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'emails-beans':
				newTab = {
					xtype: 'emailsBeansList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'emails-email-addr-rel':
				newTab = {
					xtype: 'emailsEmailAddrRelList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'emails-text':
				newTab = {
					xtype: 'emailsTextList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-addresses':
				newTab = {
					xtype: 'emailAddressesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-addresses-audit':
				newTab = {
					xtype: 'emailAddressesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-addr-bean-rel':
				newTab = {
					xtype: 'emailAddrBeanRelList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-cache':
				newTab = {
					xtype: 'emailCacheList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-marketing':
				newTab = {
					xtype: 'emailMarketingList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-marketing-prospect-lists':
				newTab = {
					xtype: 'emailMarketingProspectListsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-templates':
				newTab = {
					xtype: 'emailTemplatesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'email-templates-cstm':
				newTab = {
					xtype: 'emailTemplatesCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'erp-cliente':
				newTab = {
					xtype: 'erpClienteList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'erp-cliente-audit':
				newTab = {
					xtype: 'erpClienteAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'favorites':
				newTab = {
					xtype: 'favoritesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fields-meta-data':
				newTab = {
					xtype: 'fieldsMetaDataList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'folders':
				newTab = {
					xtype: 'foldersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'folders-rel':
				newTab = {
					xtype: 'foldersRelList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'folders-subscriptions':
				newTab = {
					xtype: 'foldersSubscriptionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events':
				newTab = {
					xtype: 'fpEventsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events-audit':
				newTab = {
					xtype: 'fpEventsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events-contacts-c':
				newTab = {
					xtype: 'fpEventsContactsCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events-fp-event-delegates-1-c':
				newTab = {
					xtype: 'fpEventsFpEventDelegates1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events-fp-event-locations-1-c':
				newTab = {
					xtype: 'fpEventsFpEventLocations1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events-leads-1-c':
				newTab = {
					xtype: 'fpEventsLeads1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-events-prospects-1-c':
				newTab = {
					xtype: 'fpEventsProspects1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-event-locations':
				newTab = {
					xtype: 'fpEventLocationsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-event-locations-audit':
				newTab = {
					xtype: 'fpEventLocationsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'fp-event-locations-fp-events-1-c':
				newTab = {
					xtype: 'fpEventLocationsFpEvents1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'g3l-gel-whatsapp':
				newTab = {
					xtype: 'g3lGelWhatsappList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'g3l-gel-whatsapp-audit':
				newTab = {
					xtype: 'g3lGelWhatsappAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'iad-sticky-notes':
				newTab = {
					xtype: 'iadStickyNotesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'iad-sticky-notes-audit':
				newTab = {
					xtype: 'iadStickyNotesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'import-maps':
				newTab = {
					xtype: 'importMapsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'inbound-email':
				newTab = {
					xtype: 'inboundEmailList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'inbound-email-autoreply':
				newTab = {
					xtype: 'inboundEmailAutoreplyList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'inbound-email-cache-ts':
				newTab = {
					xtype: 'inboundEmailCacheTsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-address-cache':
				newTab = {
					xtype: 'jjwgAddressCacheList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-address-cache-audit':
				newTab = {
					xtype: 'jjwgAddressCacheAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-areas':
				newTab = {
					xtype: 'jjwgAreasList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-areas-audit':
				newTab = {
					xtype: 'jjwgAreasAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-maps':
				newTab = {
					xtype: 'jjwgMapsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-maps-audit':
				newTab = {
					xtype: 'jjwgMapsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-maps-jjwg-areas-c':
				newTab = {
					xtype: 'jjwgMapsJjwgAreasCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-maps-jjwg-markers-c':
				newTab = {
					xtype: 'jjwgMapsJjwgMarkersCList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-markers':
				newTab = {
					xtype: 'jjwgMarkersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'jjwg-markers-audit':
				newTab = {
					xtype: 'jjwgMarkersAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'job-queue':
				newTab = {
					xtype: 'jobQueueList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'leads':
				newTab = {
					xtype: 'leadsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'leads-audit':
				newTab = {
					xtype: 'leadsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'leads-cstm':
				newTab = {
					xtype: 'leadsCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'leads-import':
				newTab = {
					xtype: 'leadsImportList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'linked-documents':
				newTab = {
					xtype: 'linkedDocumentsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'meetings':
				newTab = {
					xtype: 'meetingsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'meetings-contacts':
				newTab = {
					xtype: 'meetingsContactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'meetings-cstm':
				newTab = {
					xtype: 'meetingsCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'meetings-leads':
				newTab = {
					xtype: 'meetingsLeadsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'meetings-users':
				newTab = {
					xtype: 'meetingsUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'notes':
				newTab = {
					xtype: 'notesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'oauth2clients':
				newTab = {
					xtype: 'oauth2clientsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'oauth2tokens':
				newTab = {
					xtype: 'oauth2tokensList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'oauth-consumer':
				newTab = {
					xtype: 'oauthConsumerList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'oauth-nonce':
				newTab = {
					xtype: 'oauthNonceList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'oauth-tokens':
				newTab = {
					xtype: 'oauthTokensList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'opportunities':
				newTab = {
					xtype: 'opportunitiesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'opportunities-audit':
				newTab = {
					xtype: 'opportunitiesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'opportunities-contacts':
				newTab = {
					xtype: 'opportunitiesContactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'opportunities-cstm':
				newTab = {
					xtype: 'opportunitiesCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'outbound-email':
				newTab = {
					xtype: 'outboundEmailList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'outbound-email-audit':
				newTab = {
					xtype: 'outboundEmailAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'pilat-dictionaries':
				newTab = {
					xtype: 'pilatDictionariesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'pilat-mails':
				newTab = {
					xtype: 'pilatMailsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'pilat-modules':
				newTab = {
					xtype: 'pilatModulesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'pilat-params':
				newTab = {
					xtype: 'pilatParamsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'pilat-views':
				newTab = {
					xtype: 'pilatViewsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'project':
				newTab = {
					xtype: 'projectList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'projects-accounts':
				newTab = {
					xtype: 'projectsAccountsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'projects-bugs':
				newTab = {
					xtype: 'projectsBugsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'projects-cases':
				newTab = {
					xtype: 'projectsCasesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'projects-contacts':
				newTab = {
					xtype: 'projectsContactsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'projects-opportunities':
				newTab = {
					xtype: 'projectsOpportunitiesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'projects-products':
				newTab = {
					xtype: 'projectsProductsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'project-contacts-1-c':
				newTab = {
					xtype: 'projectContacts1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'project-cstm':
				newTab = {
					xtype: 'projectCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'project-task':
				newTab = {
					xtype: 'projectTaskList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'project-task-audit':
				newTab = {
					xtype: 'projectTaskAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'project-users-1-c':
				newTab = {
					xtype: 'projectUsers1CList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'prospects':
				newTab = {
					xtype: 'prospectsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'prospects-cstm':
				newTab = {
					xtype: 'prospectsCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'prospect-lists':
				newTab = {
					xtype: 'prospectListsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'prospect-lists-prospects':
				newTab = {
					xtype: 'prospectListsProspectsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'prospect-list-campaigns':
				newTab = {
					xtype: 'prospectListCampaignsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'relationships':
				newTab = {
					xtype: 'relationshipsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'releases':
				newTab = {
					xtype: 'releasesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'reminders':
				newTab = {
					xtype: 'remindersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'reminders-invitees':
				newTab = {
					xtype: 'remindersInviteesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'roles':
				newTab = {
					xtype: 'rolesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'roles-modules':
				newTab = {
					xtype: 'rolesModulesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'roles-users':
				newTab = {
					xtype: 'rolesUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'sai-clientes':
				newTab = {
					xtype: 'saiClientesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'saved-search':
				newTab = {
					xtype: 'savedSearchList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'schedulers':
				newTab = {
					xtype: 'schedulersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'securitygroups':
				newTab = {
					xtype: 'securitygroupsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'securitygroups-acl-roles':
				newTab = {
					xtype: 'securitygroupsAclRolesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'securitygroups-audit':
				newTab = {
					xtype: 'securitygroupsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'securitygroups-default':
				newTab = {
					xtype: 'securitygroupsDefaultList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'securitygroups-records':
				newTab = {
					xtype: 'securitygroupsRecordsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'securitygroups-users':
				newTab = {
					xtype: 'securitygroupsUsersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'spots':
				newTab = {
					xtype: 'spotsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'sugarfeed':
				newTab = {
					xtype: 'sugarfeedList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestionoptions':
				newTab = {
					xtype: 'surveyquestionoptionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestionoptions-audit':
				newTab = {
					xtype: 'surveyquestionoptionsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestionoptions-surveyquestionresponses':
				newTab = {
					xtype: 'surveyquestionoptionsSurveyquestionresponsesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestionresponses':
				newTab = {
					xtype: 'surveyquestionresponsesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestionresponses-audit':
				newTab = {
					xtype: 'surveyquestionresponsesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestions':
				newTab = {
					xtype: 'surveyquestionsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyquestions-audit':
				newTab = {
					xtype: 'surveyquestionsAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyresponses':
				newTab = {
					xtype: 'surveyresponsesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveyresponses-audit':
				newTab = {
					xtype: 'surveyresponsesAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveys':
				newTab = {
					xtype: 'surveysList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'surveys-audit':
				newTab = {
					xtype: 'surveysAuditList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'tasks':
				newTab = {
					xtype: 'tasksList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'templatesectionline':
				newTab = {
					xtype: 'templatesectionlineList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'tracker':
				newTab = {
					xtype: 'trackerList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'upgrade-history':
				newTab = {
					xtype: 'upgradeHistoryList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'users':
				newTab = {
					xtype: 'usersList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'users-cstm':
				newTab = {
					xtype: 'usersCstmList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'users-feeds':
				newTab = {
					xtype: 'usersFeedsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'users-last-import':
				newTab = {
					xtype: 'usersLastImportList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'users-password-link':
				newTab = {
					xtype: 'usersPasswordLinkList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'users-signatures':
				newTab = {
					xtype: 'usersSignaturesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'user-preferences':
				newTab = {
					xtype: 'userPreferencesList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			case 'vcals':
				newTab = {
					xtype: 'vcalsList',
					title: table,
					html: table,
					id: table,
					closable: true,
				};
				tab = Ext.getCmp('content-panel').add(newTab);
				Ext.getCmp('content-panel').setActiveTab(tab);
				break;
			
			//</es-section>
		}
	}
}
