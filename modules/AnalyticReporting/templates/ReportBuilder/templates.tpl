<!-- TEMPLATES -->
{literal}
<script id='reportBuilderOptionsTemplate' type='text/ractive'>
    <div class="report-builder-settings">
    <p>
        <button class="ar-button green" on-click='saveReport'>{/literal}{$MOD.label_save}{literal}</button>
        <a class="ar-button" href="{/literal}{$commonConfig.url.settings}{literal}">Back to settings</a>
        {{# internal.response.statusCode == 1}}
            <span class="status-success">{{internal.response.statusMessage}}</span>
            <a target="_blank" href="{{internal.reportUrl}}{{internal.response.insertedReportId}}">{/literal}{$MOD.openReport}{literal}</a>
        {{/}}
        {{# internal.response.statusCode == 2}}
            <span class="status-error">{{internal.response.statusMessage}}</span>
        {{/}}
    </p>
    <h2>{/literal}{$MOD.reportBuilder}{literal}</h2>

        <p>
        <label for="report-category">{/literal}{$MOD.label_report_folder}{literal}</label>
        <select id="report-category" value='{{selectedCategory}}'>
            {{#types.categoryTypes}}
                <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
            {{/types.categoryTypes}}
        </select>
        </p>
        <p>
            <label for="report-title">{/literal}{$MOD.label_report_name}{literal}</label>
            <input id="report-title" value='{{reportTitle}}'>
        </p>
        <p>
            <label for="report-description">{/literal}{$MOD.label_report_description}{literal}</label>
            <input id="report-description" value='{{reportDescription}}'>
        </p>
        <p>
        <label for="report-type">{/literal}{$MOD.reportType}{literal}</label>
        <select id="report-type" value='{{selectedReportType}}'>
            {{#types.reportTypes}}
                <option value='{{name}}' disabled="{{.disabled}}">{{title}}</option>
            {{/types.reportTypes}}
        </select>
        </p>
	</div>


	<div class="report-builder-module-tree">
        <ul>
            {{#.selectedModules}}

                <reportBuilderModule moduleName='{{moduleName}}' children='{{children}}' depth='{{depth+1}}'/>

            {{/.selectedModules}}
        </ul>
    </div>




</script>
<script id='reportBuilderModule' type='text/ractive'>

		<li>
		    <img class="addModule" on-click='addModule' src="modules/AnalyticReporting/assets/img/cross_g.png">
			{{#depth > 1}}
			    <img class="removeModule" on-click='removeModule' src="modules/AnalyticReporting/assets/img/cross.png">
			{{/}}
			<select value='{{moduleName}}'>
				{{#types.moduleTypes}}
					<option value='{{name}}'>{{title}}</option>
				{{/types.moduleTypes}}
			</select>
			{{#depth > 1}}


                <select value='{{moduleFieldName}}'>
                    {{#types.modulesFieldTypes[moduleName]}}
                        <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                    {{/types.modulesFieldTypes[moduleName]}}
                </select>

                <strong> = </strong>
                <strong>{{parentModuleName}}</strong>
                <select value='{{parentModuleFieldName}}'>
                    {{#types.modulesFieldTypes[parentModuleName]}}
                        <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                    {{/types.modulesFieldTypes[parentModuleName]}}
                </select>

                {{# manyToManyTableTypesComputed.length > 0}}
                    <select value='{{relation}}'>
                        {{#types.relationTypes}}
                            <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                        {{/types.relationTypes}}
                    </select>
                {{/}}


                {{#relation == 'manyToMany'}}
                    <br/>
                    <div class="many-to-many-settings">
                        <select value='{{manyToMany.tableName}}'>
                            {{#manyToManyTableTypesComputed}}
                                <option value='{{tableName}}' disabled="{{disabled}}">{{tableName}}</option>
                            {{/}}
                        </select>

                        <select value='{{manyToMany.subModuleColumnName}}'>
                            {{#selectedManyToManyTable.columns}}
                                <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                            {{/}}
                        </select>

                        <span class="its-hide-text">
                            <strong> = </strong>
                            <strong>{{parentModuleName}}</strong>
                        </span>

                        <select value='{{manyToMany.mainModuleColumnName}}'>
                            {{#selectedManyToManyTable.columns}}
                                <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                            {{/}}
                        </select>

                        {{#selectedManyToManyTable.relModule == true}}
                            <select value='{{manyToMany.roleIndex}}'>
                                {{#selectedManyToManyTable.columns}}
                                    <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                                {{/}}
                            </select>
                            <input value='{{manyToMany.roleValue}}'>
                        {{/}}

                    </div>
                {{/}}

			{{/}}

		</li>


        {{#.children}}
         <li>
            <ul>
                <reportBuilderModule
                    moduleName='{{moduleName}}'
                    moduleFieldName='{{moduleFieldName}}'
                    children='{{children}}'
                    depth='{{depth+1}}'
                    parentModuleName='{{parentModuleName}}'
                    parentModuleFieldName='{{parentModuleFieldName}}'
                    relation='{{relation}}'
                    manyToMany='{{manyToMany}}'
                />
            </ul>
        </li>
        {{/.children}}


</script>

<script id='reportBuilderSettingsEditorTemplate' type='text/ractive'>
    <p>
        <button class="ar-button green" on-click='saveReport'>{/literal}{$MOD.label_save}{literal}</button>
        {{# internal.response.statusCode == 1}}
            <span class="status-success">{{internal.response.statusMessage}}</span>
            <a target="_blank" href="{{internal.reportUrl}}{{internal.response.insertedReportId}}">{/literal}{$MOD.openReport}{literal}</a>
        {{/}}
        {{# internal.response.statusCode == 2}}
            <span class="status-error">{{internal.response.statusMessage}}</span>
        {{/}}
    </p>
    <table>
        <tr>
            <th>Module Name</th>
            <th>Many To Many Table Name</th>
            <th>Applicable modules</th>
            <th>Columns</th>
            <th>Multiple modules in same table</th>
        </tr>

        {{#types.moduleTypes}}
            <tr>
                <td><img class="addTable" on-click='addModule' src="modules/AnalyticReporting/assets/img/cross_g.png">{{title}}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            {{#types.manyToManyTypes[name]}}
                <tr>
                    <td><img class="removeTable" on-click='removeModule' src="modules/AnalyticReporting/assets/img/cross.png"></td>
                    <td><input placeholder='Many to many table name' value='{{tableName}}'></td>
                    <td>
                        {{#applicableModules:i}}
                            <span>{{applicableModules[i]}} </span>
                        {{/}}

                        <select decorator='select2' value='{{applicableModules}}' multiple >
                            {{#types.moduleTypes}}
                                <option value='{{name}}' disabled="{{disabled}}">{{title}}</option>
                            {{/}}
                        </select>



                    </td>
                    <td>
                        {{#columns}}
                            {{name}}
                        {{/}}
                    </td>
                    <td><input type='checkbox' checked='{{relModule}}'></td>
                </tr>
            {{/}}
        {{/}}
    <table>
</script>

{/literal}