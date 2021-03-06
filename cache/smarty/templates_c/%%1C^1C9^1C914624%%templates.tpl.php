<?php /* Smarty version 2.6.31, created on 2020-11-13 21:10:33
         compiled from modules/AnalyticReporting/templates/templates.tpl */ ?>
<!-- TEMPLATES -->
<?php echo '

<script id="reportButtonsTemplate" type="text/ractive-template">
'; ?>
<?php if ($this->_tpl_vars['CANEDIT'] == 1): ?><?php echo '
<reportBtn text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_save']; ?>
<?php echo '" on-clicked="save" className="green"/>
<reportBtn text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_save_as']; ?>
<?php echo '" on-clicked="saveAs" className="green" />
'; ?>
<?php endif; ?>
<?php if ($this->_tpl_vars['CANDELETE'] == 1): ?><?php echo '
<reportBtn text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_delete']; ?>
<?php echo '" on-clicked="delete" className="red"/>
'; ?>
<?php endif; ?><?php echo '
<reportBtn text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_back_to_reports']; ?>
<?php echo '" on-clicked="back"/>
</script>

<script id="selectBoxImgTemplate" type="text/ractive-template">

<select value="{{selected}}">
	{{#options:opt}}
	<option 
	data-imagesrc="modules/AnalyticReporting/assets/img/{{options[opt][valueName]}}.png"
            data-description=""
	value="{{options[opt][valueName]}}">{{options[opt][titleName]}}</option>
	{{/options}}
</select>
</script>
<script type="text/javascript" src="modules/AnalyticReporting/assets/js/dd.js"></script>
<script id="multiSelectBoxTemplate" type="text/ractive-template">
<div style="display:inline-block"><select value="{{selected}}" decorator="multiSelect" multiple="multiple">
{{#optionGroups}}
	<optgroup label="{{.title}}">
		{{#items}}
			<option value="{{.value}}" disabled="{{.disabled}}">{{.title}}</option>
		{{/items}}
	</optgroup>
{{/optionGroups}}
</select></div>
</script>

<script id="groupedBoxTemplate" type="text/ractive-template">
<select value="{{selected}}" decorator="select2:filter">
{{#groups}}
	<optgroup label="{{title}}">
		{{#items}}
			<option value="{{value}}">{{title}}</option>
		{{/items}}
	</optgroup>
{{/groups}}
</select>
</script>

<script id="fieldFilterValueTemplate" type="text/ractive-template">
{{#condition!=="empty" &&condition!=="filled" &&condition!=="today" &&condition!=="tomorrow" &&condition!=="aftert" &&condition!=="yesterday" &&condition!=="tilly" &&condition!=="yesterday" &&condition!=="ndays" &&condition!=="pdays" &&condition!=="gtdays" &&condition!=="ltdays" &&condition!=="tweek" &&condition!=="lweek" &&condition!=="tmonth" &&condition!=="lmonth" &&condition!=="tyear" &&condition!=="lyear" &&condition!=="nquarter" &&condition!=="lquarter" &&condition!=="nweek" &&condition!=="checked" &&condition!=="unchecked" &&condition!=="assignedto"}}
	{{#fieldType === "txt"}}
		<input value="{{value.0}}">
	{{/fieldType}}
	{{#fieldType === "user"}}
		<input value="{{value.0}}">
	{{/fieldType}}
	{{#fieldType === "select"}}
		<select decorator="select2:filter" value="{{value}}" style="width:100%;" multiple="multiple">
			{{#availableValues}}
			<option value="{{val}}">{{title}}</option>
			{{/availableValues}}
		</select>
	{{/fieldType}}
	{{#fieldType === "number"}}
		<input pattern= "[0-9\\.,]+" type="number" value="{{value.0}}">
	{{/fieldType}}
	{{#fieldType === "integer"}}
		<input pattern= "[0-9\\.,]+" type="number" value="{{value.0}}">
	{{/fieldType}}
	{{#fieldType === "time"}}
		<selectBox selected = "{{value.0}}" options="{{timeValues.hours}}" titleName="name" valueName="name"/>
		<selectBox selected = "{{value.1}}" options="{{timeValues.minutes}}" titleName="name" valueName="name"/>
		<selectBox selected = "{{value.2}}" options="{{timeValues.AmPm}}" titleName="name" valueName="name"/>
		{{#condition=="between" || condition=="nbetween" }}
			<selectBox selected = "{{value.4}}" options="{{timeValues.hours}}" titleName="name" valueName="name"/>
			<selectBox selected = "{{value.5}}" options="{{timeValues.minutes}}" titleName="name" valueName="name"/>
			<selectBox selected = "{{value.6}}" options="{{timeValues.AmPm}}" titleName="name" valueName="name"/>
		{{/condition}}
	{{/fieldType}}
	{{#fieldType === "date"}}
		<input type="text" decorator="datepicker" value="{{value.0}}">
		{{#condition=="between" || condition=="nbetween" }}
			<input type="text" decorator="datepicker" value="{{value.1}}">
		{{/condition}}
	{{/fieldType}}
	{{#fieldType === "datetime"}}
		<input type="text" decorator="datepicker" value="{{value.0}}">
		<selectBox selected = "{{value.1}}" options="{{timeValues.hours}}" titleName="name" valueName="name"/>
		<selectBox selected = "{{value.2}}" options="{{timeValues.minutes}}" titleName="name" valueName="name"/>
		<selectBox selected = "{{value.3}}" options="{{timeValues.AmPm}}" titleName="name" valueName="name"/>
		{{#condition=="between" || condition=="nbetween" }}
			<input type="text" decorator="datepicker" value="{{value.4}}">
			<selectBox selected = "{{value.5}}" options="{{timeValues.hours}}" titleName="name" valueName="name"/>
			<selectBox selected = "{{value.6}}" options="{{timeValues.minutes}}" titleName="name" valueName="name"/>
			<selectBox selected = "{{value.7}}" options="{{timeValues.AmPm}}" titleName="name" valueName="name"/>
		{{/condition}}
	{{/fieldType}}
{{/condition}}
{{#condition=="ndays" || condition=="pdays" || condition=="gtdays" || condition=="ltdays" }}
	<input value="{{value.0}}">
{{/condition}}
</script>
'; ?>
<?php echo '

<script id="totalTableTemplate" type="text/ractive-template">
<table class="ar-data-table">
	<thead>
		<tr>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_group']; ?>
<?php echo '</th>
			{{#aggregates:i}}
			{{#.value.sum}}
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_sum']; ?>
<?php echo '({{fieldsByName[aggregates[i].selectedField].bareTitle}})</th>
			{{/.value.sum}}
			{{#.value.avg}}
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_average']; ?>
<?php echo '({{fieldsByName[aggregates[i].selectedField].bareTitle}})</th>
			{{/.value.avg}}
			{{#.value.count}}
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_count']; ?>
<?php echo '({{fieldsByName[aggregates[i].selectedField].bareTitle}})</th>
			{{/.value.count}}
			{{/aggregates}}
		</tr>
	</thead>
	<tbody>
		{{#selectedFields:i}}
            <tr style="{{#i==errorAggregates}}border:2px solid red;{{/i==errorAggregates}}">
                <td>{{fieldsByName[selectedFields[i].name].bareTitle}} {{addonTitle(fieldsByName, selectedFields[i].name, selectedFields[i])}}</td>
                {{#aggregates}}
                {{#.value.sum}}<td><input type="checkbox"   checked="{{selectedFields[i].showAggregates[.selectedField].sum}}"></td>{{/.value.sum}}
                {{#.value.avg}}<td><input type="checkbox"   checked="{{selectedFields[i].showAggregates[.selectedField].avg}}"></td>{{/.value.avg}}
                {{#.value.count}}<td><input type="checkbox" checked="{{selectedFields[i].showAggregates[.selectedField].count}}"></td>{{/.value.count}}
                {{/aggregates}}
            </tr>
		{{/selectedFields}}
		<tr><td>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_grand_total']; ?>
<?php echo '</td>
		{{#aggregates}}
		{{#value}}
		{{#sum}}<td><input type="checkbox"   checked="{{totalAggregates[selectedField].sum}}"></td>{{/sum}}
		{{#avg}}<td><input type="checkbox"   checked="{{totalAggregates[selectedField].avg}}"></td>{{/avg}}
		{{#count}}<td><input type="checkbox" checked="{{totalAggregates[selectedField].count}}"></td>{{/count}}
		{{/value}}
		{{/aggregates}}
		</tr>
	</tbody>
</table>
</script>


<script id="reportFieldManagerTemplate" type="text/ractive-template">
<div class="tools">
	'; ?>
<?php if ($this->_tpl_vars['CANEDIT'] == 1 && $this->_tpl_vars['SHOW_DETAILS']): ?><?php echo '
	<includeDetails on-changed="includeDetails" />
	'; ?>
<?php endif; ?><?php echo '
</div>
<div>
    <input type="text" id="fields-available-search" style="width:276px;border:1px solid #ddd;padding:3px;margin-bottom:2px;" placeholder="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_type_to_search']; ?>
<?php echo '" value="{{filter}}" />
    <a href="#" on-click="cleanFilter" id="fields-available-clear" style="margin-left:2px;"><img src="modules/AnalyticReporting/assets/img/cross_grey.png" alt="x" style="height:8px;width:8px;" /></a>
</div>
<div style="display:inline-block;">
    <select style="min-width:300px;height:100px;" multiple="multiple" value="{{markedFields}}">
    {{#filteredBlocks}}
        <optgroup label="{{title}}">
        {{#fields}}
            <option value="{{name}}">{{title}}</option>
        {{/fields}}
        </optgroup>
    {{/filteredBlocks}}
    </select>
</div>
<div style="display:inline-block;vertical-align:top;padding-top:50px">
    <a href="#" on-click="selectField">
        <img alt="->" src="modules/AnalyticReporting/assets/img/arrow_right.png" />
    </a>
</div>
<div style="display:inline-block;">
    <div style="position:absoluete;margin-top:-30px;font-weight:bold;">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_selected_columns']; ?>
<?php echo ':</div>
    <select style="min-width:300px;height:100px;" multiple="multiple" value="{{markedFieldsSelected}}">
        {{#selectableFields}}
        <option value="{{name}}">{{title}}</option>
        {{/selectableFields}}
    </select>
</div>
<div style="display:inline-block;vertical-align:top;padding-top:30px">
    <a style="display:block;" href="#" on-click="moveUp">
        <img alt="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_up']; ?>
<?php echo '" src="modules/AnalyticReporting/assets/img/arrow_up.png">
    </a>
    <a style="display:block;" href="#" on-click="removeField" class="tooltipX">
        <img alt="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_remove']; ?>
<?php echo '" src="modules/AnalyticReporting/assets/img/cross.png">
        <span>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_remove_item']; ?>
<?php echo '</span>
    </a>
    <a style="display:block;" href="#" on-click="moveDown">
        <img alt="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_down']; ?>
<?php echo '" src="modules/AnalyticReporting/assets/img/arrow_down.png">
    </a>
</div>
<br/><br/>
<reportButtonPreview on-preview="preview" />
</script>

<script id="reportFilterManagerTemplate" type="text/ractive-template">
<div style="display:inline-block;">

	<!-- TABLE -->
	<table>
		{{#groups:i}}
			<filterRuleGroup sequence="{{i}}" blocks="{{blocks}}" connector="{{connector}}" filters="{{filters}}" on-deleteGroup="groupDeleted" canDelete="{{groups.length>1}}" fieldHTML="{{~/fieldHTML}}" />
		{{/groups}}
	</table>
	<!-- // TABLE -->

	<!-- ADD BUTTONS -->
	<div style="margin-top:10px;">
	'; ?>
<?php if ($this->_tpl_vars['CANEDIT'] == 1): ?><?php echo '
		<div style="float:left;">
			<reportBtn on-clicked="addGroup" text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_add_group']; ?>
<?php echo '"/>
		</div>
	'; ?>
<?php endif; ?>

	<?php if ($this->_tpl_vars['CANEDIT'] == 1): ?><?php echo '
		<div style="float:right;margin-top:4px;">
			<reportBtnGC on-clicked="addFilter" text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_add_filter']; ?>
<?php echo '"/>
		</div>
	'; ?>
<?php endif; ?><?php echo '
		<div style="clear:both;"></div>
	</div>
	<!-- // ADD BUTTONS -->

</div>
<br/><br/>
<reportButtonPreview on-preview="preview"/>
</script>

<script id="reportAggregateManagerTemplate" type="text/ractive-template">
'; ?>

<div class="tools">
	<?php if ($this->_tpl_vars['SHOW_DETAILS']): ?>
	<includeDetails on-changed="includeDetails" />
	<?php endif; ?>
</div>
<table class="ar-data-table">
	<thead>
		<tr>
			<th><?php echo $this->_tpl_vars['MOD']['label_field']; ?>
</th>
			<th><?php echo $this->_tpl_vars['MOD']['label_sum']; ?>
</th>
			<th><?php echo $this->_tpl_vars['MOD']['label_average']; ?>
</th>
			<th><?php echo $this->_tpl_vars['MOD']['label_count']; ?>
<?php echo '</th>
			<th>&nbsp;</th>
		</tr>
	</thead>
	<tbody>
		{{#aggregates:i}}
			<reportAggregate seq="{{i}}" availableFields="{{~/availableFields}}" fieldsByName="{{~/fieldsByName}}" on-aggregate="updateAggregates" on-deleteAggregate="deleteAggregate" selectedField="{{.selectedField}}" value="{{.value}}" />
		{{/aggregates}}
	</tbody>
</table>
		'; ?>

			<?php if ($this->_tpl_vars['CANEDIT'] == 1): ?>
				<div style="margin-left:705px">
					<reportBtnGC on-clicked="addAggregate" text="<?php echo $this->_tpl_vars['MOD']['label_add_item']; ?>
"/>
				<div>
			<?php endif; ?>
		<?php echo '
<br/><br/>
<div style="margin-left:-660px">
	<reportButtonPreview on-preview="preview"/>
<div>
</script>

<script id="reportGroupingManagerTemplate" type="text/ractive-template">
<div class="tools">
	'; ?>
<?php if ($this->_tpl_vars['SHOW_DETAILS']): ?><?php echo '
	<includeDetails on-changed="includeDetails" />
	'; ?>
<?php endif; ?><?php echo '
	<isCrosstab on-changed="isCrosstab" val="{{isCrosstab}}"  aggregatesAsColumnVal="{{aggregatesAsColumn}}" />
</div>
'; ?>
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?><?php echo '
<sortingByCombined blocks="{{blocks}}" combinedFields="{{combinedFields}}" combinedModules="{{combinedModules}}" selectedFields="{{selectedFields}}" aggregates="{{aggregates}}" isCrosstab="{{isCrosstab}}" isCombined="{{isCombined}}" availableFields="{{availableFields}}"/>
'; ?>
<?php endif; ?>
<?php echo '
<sortingBy blocks="{{blocks}}" canSort="{{canSort}}" selectedFields="{{selectedFields}}" aggregates="{{aggregates}}"
           isCrosstab="{{isCrosstab}}" isCombined="{{isCombined}}"
           availableFields="{{availableFields'; ?>
<?php if ($this->_tpl_vars['REPORTCOMBINED'] == true): ?><?php echo 'Possible'; ?>
<?php endif; ?><?php echo '}}"
           fieldsByName="{{~/fieldsByName}}"
        />
'; ?>

	<?php if ($this->_tpl_vars['CANEDIT'] == 1): ?><?php echo '
	<div style="margin-left:731px;">
		<reportBtnGC on-clicked="addItem" text="'; ?>
<?php echo $this->_tpl_vars['MOD']['label_add_item']; ?>
<?php echo '"/>
	</div>
    '; ?>
<?php endif; ?><?php echo '
<br/><br/>
<div>
<b>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_select_summaries']; ?>
<?php echo '</b>
<br/>
<totalTable selectedFields="{{selectedFields}}" availableFields="{{availableFields}}" aggregates="{{aggregates}}" totalAggregates="{{totalAggregates}}" isCrosstab="{{isCrosstab}}" errorAggregates="{{errorAggregates}}" fieldsByName="{{fieldsByName}}" />
<br/><br/>
<reportButtonPreview on-preview="preview"/>
</script>

<script id="sortingByFieldTemplate" type="text/ractive-template">
<tr>
	<td class="groupingLevel"><h3></h3></td>
	<td>
		<selectBox options="{{sortOptions}}" valueName="name" titleName="title" selected="{{sortAction}}"/>
	</td>
	<td>
		<selectBox options="{{fields}}" valueName="name" titleName="title" selected="{{name}}" />
		{{#isDate}}
			<selectBox options="{{dateOptions}}" valueName="name" titleName="title" selected="{{dateGrouping}}"/>
		{{/isDate}}
		{{#isMultiSelect}}
		<br><label><input type="checkbox" checked="{{.transform}}"> '; ?>
<?php echo $this->_tpl_vars['MOD']['label_merge_multiple_selections']; ?>
<?php echo '</label>
		{{/isMultiSelect}}
	</td>
	<td>
	{{#sortAction == "sort" || sortAction == "groupsort" }}
        {{#hasAggregates}}
        <selectBox options="{{getAggregates}}" valueName="name" titleName="title" selected="{{aggregate}}"/>
        {{/hasAggregates}}

		<selectBox options="{{sortDirections}}" valueName="name" titleName="title" selected="{{sortDirection}}"/>
	{{/sortAction}}

	{{#seq == 0 && isCombined == false && isCrosstab == false}}
	<div>
	'; ?>
<?php echo $this->_tpl_vars['MOD']['label_show_top']; ?>
<?php echo ' <input type="text" value="{{showTop}}" placeholder="All" size="5" class="input-mini" />
	</div>
	{{/seq}}

	</td>
	{{#isCrosstab}}
	<td>
		<selectBox options="{{positions}}" valueName="name" titleName="title" selected="{{position}}"/>
	</td>
	{{/isCrosstab}}
	<td>
		<a href="#" on-click="delete:{{seq}}" class="tooltipX">
			<img src="modules/AnalyticReporting/assets/img/cross.png"/>
			<span>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_remove_item']; ?>
<?php echo '</span>
		</a>
	</td>
</tr>
</script>


<script id="sortingByCombinedFieldTemplate" type="text/ractive-template">
		<selectBox options="{{fields}}" valueName="name" titleName="title" selected="{{selectedValue}}" />
</script>

<script id="sortingByTemplate" type="text/ractive-template">
<table class="ar-data-table">
	<thead>
		<tr>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_level']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_action']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_group_by']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_sort']; ?>
<?php echo '</th>
			{{#isCrosstab}}
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_position']; ?>
<?php echo '</th>
			{{/isCrosstab}}
			<th style="width:12px;">&nbsp;</th>
		</tr>
	</thead>
	<tbody>
	{{#selectedFields:i}}
		<sortingByField canSortParam="{{ ( (i<1) || selectedFields[i-1].sortAction!=\'sort\') }}" fields="{{fields}}"
                        canSort="{{canSort}}" sortOptions="{{sortOptions}}" title="{{title}}" name="{{name}}"
                        sortAction="{{sortAction}}" aggregate="{{aggregate}}" dateGrouping="{{.dateGrouping}}"
                        sortDirection="{{sortDirection}}" aggregates="{{aggregates}}" position="{{position}}"
                        isFirst="{{isFirst}}" seq="{{i}}" showAggregates="{{showAggregates}}"
                        fieldsByName="{{~/fieldsByName}}" on-deleted="deleteSort" on-fieldChanged="updateField"
		                transform="{{transform}}" showTop="{{.showTop}}"
				/>
	{{/selectedFields}}
	</tbody>
</table>
</script>

<script id="sortingByCombinedTemplate" type="text/ractive-template">
<table class="ar-data-table">
	<thead>
		<tr>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_level']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_action']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_group_by']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_date_group']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_sort']; ?>
<?php echo '</th>
			{{#isCrosstab}}
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_position']; ?>
<?php echo '</th>
			{{/isCrosstab}}
		</tr>
	</thead>
	<tbody>
    <tr>
        <td class="groupingLevel">
            <h3></h3>
        </td>
        <td>
            <selectBox options="{{sortOptions}}" valueName="name" titleName="title" selected="{{combinedSelectedFields.sortAction}}"/>
        </td>
        <td>
            {{#combinedFields:moduleId}}
            <sortingByCombinedField fields="{{.}}" selectedValue="{{combinedSelectedFields.fields[moduleId]}}" title="{{title}}" name="{{name}}" sortAction="{{combinedSelectedFields.sortAction}}" dateGrouping="{{combinedSelectedFields.dateGrouping}}" sortDirection="{{combinedSelectedFields.sortDirection}}" position="{{combinedSelectedFields.position}}" seq="{{moduleId}}" combinedModulesCount="{{combinedModulesCount}}" /><br>
            {{/combinedFields}}
        </td>
        <td>
            <selectBox options="{{dateOptions}}" valueName="name" titleName="title" selected="{{combinedSelectedFields.dateGrouping}}"/>
        </td>

        <td>
            <selectBox options="{{sortDirections}}" valueName="name" titleName="title" selected="{{combinedSelectedFields.sortDirection}}"/>
        </td>
        {{#isCrosstab}}
        <td>
            <selectBox options="{{positions}}" valueName="name" titleName="title" selected="{{combinedSelectedFields.position}}"/>
        </td>
        {{/isCrosstab}}
    </tr>
	</tbody>
</table>
</script>

<script id="reportAggregateTemplate" type="text/ractive-template">
'; ?>
<?php echo '
		<tr style="{{#seq===invalidAggregate}}border:2px solid red;{{/seq===invalidAggregate}}">
			<td><selectBox options="{{availableFields}}" valueName="name" titleName="title" on-selectedValue="fieldSelected" selected="{{selectedField}}" /></td>
			<td><input type="checkbox" checked="{{value.sum}}" disabled="{{notNumeric}}"></td>
			<td><input type="checkbox" checked="{{value.avg}}" disabled="{{notNumeric}}"></td>
			<td><input type="checkbox" checked="{{value.count}}" disabled="{{virtual}}">
			<td><a href="#" on-click="remove" class="tooltipX">
				<img src="modules/AnalyticReporting/assets/img/cross.png"/>
				<span>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_remove_item']; ?>
<?php echo '</span>
			</a></td>
		</tr>
'; ?>
<?php echo '
</script>

<script id="filterRuleGroupTemplate" type="text/ractive-template">
<tr class="{{#sequence}}filter group{{/sequence}}">
	<td colspan="4">{{#sequence}}<fieldConnector connector="{{connector}}"/>{{/sequence}}</td>
	<td style="vertical-align:middle;">
		{{#canDelete && sequence}}
			<a href="#" on-click="delete:{{sequence}}">
				<img src="modules/AnalyticReporting/assets/img/cross.png"/>
			</a>
		{{/canDelete}}
	</td>
</tr>
{{#filters:i}}
	<filterRule on-deleteRule="ruleDeleted" blocks="{{blocks}}" fieldName="{{fieldName}}"
 		condition="{{condition}}" value="{{value}}" connector="{{connector}}"
        fieldHTML="{{~/fieldHTML}}" sequence="{{i}}"/>
{{/filters}}
</script>

<script id="filterRuleTemplate" type="text/ractive-template">
<tr class="filter">
	<td style="vertical-align:middle;{{^sequence}}padding:0;{{/sequence}}">{{#sequence}}<fieldConnector connector="{{connector}}"/>{{/sequence}}</td>
	<td style="vertical-align:middle;"><fieldSelector fieldHTML="{{fieldHTML}}" selectedField="{{fieldName}}" /></td>
	<td style="vertical-align:middle;"><fieldCondition fieldType="{{fieldType}}" condition="{{condition}}"/></td>
	<td style="vertical-align:middle;" class="conditions"><fieldFilterValue fieldType="{{fieldType}}" condition="{{condition}}" value="{{value}}" availableValues="{{availableValues}}"/></td>
	<td style="vertical-align:middle;">
			<a href="#" on-click="delete:{{sequence}}" class="tooltipX">
				<img src="modules/AnalyticReporting/assets/img/cross.png"/>
				<span>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_remove_filter']; ?>
<?php echo '</span>
			</a>
	</td>
</tr>
</script>



<script id="chartTypeTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_type']; ?>
<?php echo ': <selectBoxImg id="cts" options="{{chartTypes}}" valueName="name" titleName="title" selected="{{chartType}}"/></label>
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>

<script id="funnelChartLegendTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_cumulated']; ?>
<?php echo ': <input type="checkbox" checked="{{cumulated}}" /></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_funnel_group_by']; ?>
<?php echo ': <selectBox options="{{availableGroups}}" valueName="name" titleName="title" selected="{{xAxis}}" /></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_value']; ?>
<?php echo ': <selectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{yAxis}}"/></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_show_percents']; ?>
<?php echo ': <input type="checkbox" checked="{{showPercents}}" /></label></div>
	{{#cumulated}}
	{{#sortableValues.length}}
	<div style="padding-top:10px;">
		<i>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_drag_values_hint']; ?>
<?php echo '</i>
		<ul id="sortableValues" class="ui-sortable">
		{{#sortableValues}}
			<li decorator=\'sortable\' class="ui-state-default ui-sortable-handle">{{value}}</li>
		{{/sortableValues}}
		</ul>
	</div>
	{{/sortableValues.length}}
	{{/cumulated}}
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>

<script id="gaugeChartLegendTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_group']; ?>
<?php echo ': <selectBox options="{{availableGroups}}" valueName="name" titleName="title" selected="{{xAxis}}"/></label></div>
	{{#availableGroupSegments.length}}
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_group_segment']; ?>
<?php echo ': <selectBox options="{{availableGroupSegments}}" valueName="name" titleName="title" selected="{{xAxisSegment}}"/></label></div>
	{{/availableGroupSegments.length}}
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_value']; ?>
<?php echo ': <selectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{yAxis}}"/></label></div>
	'; ?>
<?php echo $this->_tpl_vars['MOD']['label_value_ranges']; ?>
<?php echo ':

	<div style="display:table;">
		{{#valueZones:i}}
		<div>
			<input type="text" value="{{from}}" size="10" /> - 
			<input type="text" value="{{to}}" size="10" />
 			<selectBox options="{{availableValueZones}}" valueName="name" titleName="title" selected="{{clazz}}"/>
 			{{#i != 0}}
 			<a href="#" on-click="removeValueZone:{{i}}"><img src="modules/AnalyticReporting/assets/img/cross.png" alt="Remove" style="vertical-align:middle" /></a>
 			{{/i}}
		</div>
		{{/valueZones}}
		<div style="padding-top:3px;text-align:right;">
			<a href="#" on-click="addValueZone">
				<img src="modules/AnalyticReporting/assets/img/cross_g.png" alt="Add"/>
			</a>
		</div>
	</div>
	<div>
		<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_show_gauge_labels']; ?>
<?php echo ': <input type="checkbox" checked="{{showLabels}}" /></label>
	</div>
	<div>
		<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_show_gauge_zone_labels']; ?>
<?php echo ': <input type="checkbox" checked="{{showZoneLabels}}" /></label>
	</div>
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>

<script id="pieChartLegendTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_legend']; ?>
<?php echo ': <selectBox options="{{availableGroups}}" valueName="name" titleName="title" selected="{{xAxis}}"/></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_value']; ?>
<?php echo ': <selectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{yAxis}}"/></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_show_percents']; ?>
<?php echo ': <input type="checkbox" checked="{{showPercents}}" /></label></div>
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>

<script id="barChartLegendTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_primary_horizontal']; ?>
<?php echo ': <selectBox options="{{availableGroups}}" valueName="name" titleName="title" selected="{{xAxis}}"/></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_secondary_vertical']; ?>
<?php echo ': <multiSelectBox aggregates="{{aggregates}}" groups="{{groups}}" options="{{availableAxis}}" valueName="name" titleName="title" selected="{{yAxis}}" disableSelectBox="{{disableSelectBox}}" /></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_legend']; ?>
<?php echo ': <multiSelectBox aggregates="{{aggregates}}" groups="{{groups}}" options="{{availableLegends}}" valueName="name" titleName="title" selected="{{legend}}" disableSelectBox="{{false}}" /></label></div>
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>


<script id="lineChartLegendTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_primary_horizontal']; ?>
<?php echo ': <selectBox options="{{availableGroups}}" valueName="name" titleName="title" selected="{{xAxis}}"/></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_secondary_vertical']; ?>
<?php echo ': <multiSelectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{yAxis}}" disableSelectBox="{{disableSelectBox}}" /></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_legend']; ?>
<?php echo ': <multiSelectBox aggregates="{{aggregates}}" groups="{{groups}}" options="{{availableLegends}}" valueName="name" titleName="title" selected="{{legend}}" disableSelectBox="{{false}}" /></label></div>
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>

<script id="combinedChartLegendTemplate" type="text/ractive-template">
<div class="chartSizeBox">
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_size']; ?>
<?php echo ': <selectBox options="{{chartSizes}}" valueName="value" titleName="title" selected="{{chartSize}}" on-selected="resizeChart" /></label>
</div>
<div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_primary_horizontal']; ?>
<?php echo ': <selectBox options="{{availableGroups}}" valueName="name" titleName="title" selected="{{xAxis}}"/></label></div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_secondary_vertical']; ?>
<?php echo ': <multiSelectBox options="{{availableAxis1}}" valueName="name" titleName="title" selected="{{yAxis}}" disableSelectBox="{{false}}" /></label><selectBox options="{{availableTypes}}" valueName="name" titleName="title" selected="{{yAxisType}}" />{{#yAxisType == \'bar\'}}<label><input type="checkbox" checked="{{bars1Stacked}}" />'; ?>
<?php echo $this->_tpl_vars['MOD']['label_stacked']; ?>
<?php echo '</label>{{/yAxisType == \'bar\'}}</div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_third_vertical']; ?>
<?php echo ': <multiSelectBox options="{{availableAxis2}}" valueName="name" titleName="title" selected="{{yAxis2}}" disableSelectBox="{{false}}" /></label><selectBox options="{{availableTypes}}" valueName="name" titleName="title" selected="{{yAxis2Type}}" />{{#yAxis2Type == \'bar\'}}<label><input type="checkbox" checked="{{bars2Stacked}}" />'; ?>
<?php echo $this->_tpl_vars['MOD']['label_stacked']; ?>
<?php echo '</label>{{/yAxis2Type == \'bar\'}}</div>
	<div><label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_legend']; ?>
<?php echo ': <multiSelectBox options="{{availableLegends}}" aggregates="{{aggregates}}" valueName="name" titleName="title" selected="{{legend}}" disableSelectBox="{{false}}" /></label></div>
</div>
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<label>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_title']; ?>
<?php echo ': <input style="width: 560px;" type="text" value="{{chartTitle}}" /></label>
</div>
</script>

<!--
<script id="chartLabelTemplate" type="text/ractive-template">
<div class="tools">
	<chartButtons on-preview="preview"/>
</div>
<div>
	<div><label>Legend: <selectBox options="{{availableLegends}}" valueName="name" titleName="title" selected="{{legend}}"/></label></div>
	<div><label>Primary Horizontal Axis: <selectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{xAxis}}"/></label></div>
	<div><label>Secondary Vertical Axis: <selectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{yAxis}}"/></label></div>
	<div><label>Third Vertical Axis:  <selectBox options="{{availableAxis}}" valueName="name" titleName="title" selected="{{y2Axis}}"/></label></div>
</div>
<div>
{{#availableGroups:i}}
	<label><input type="radio" value="{{name}}" checked="{{name == labelName}}" name="{{labelName}}"/> {{title}}</label><br />
{{/availableGroups}}
</div>
</script>
-->

<script id="chartComponentTemplate" type="text/ractive-template">
<chartComponent points=\'{{points}}\'/>
</script>

<script id="chartViewTemplate" type="text/ractive-template">
<svg></svg>
{{#showLinks}}
<br />
<div>
	<a id="exportChartAs" target="_blank" style="cursor:pointer">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_save_chart']; ?>
<?php echo '</a>
	<a id="addToDashboard" style="cursor:pointer">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_add_to_dashboard']; ?>
<?php echo '</a>
	<div style="float:right;">
		'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_height']; ?>
<?php echo '
		<a href="javascript:void(0);" on-click="increaseHeight">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_height_increase']; ?>
<?php echo '</a>&nbsp;&nbsp;
		<a href="javascript:void(0);" on-click="decreaseHeight">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_chart_height_decrease']; ?>
<?php echo '</a>
	</div>
</div>
{{/showLinks}}
</script>

<script id="reportAccessTemplate" type="text/ractive-template">
	<label>
		<input type="checkbox" checked="{{updatePermissions}}" />
			Update Permissions
		</label>
		<br>
    '; ?>
<?php echo $this->_tpl_vars['MOD']['label_owner']; ?>
<?php echo ': <selectBox titleName="name" valueName="id" selected="{{owner}}" options="{{availableOwners}}"/>
    <select value="{{globalSharing}}">
        <option value="PUB">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_public']; ?>
<?php echo '</option>
        <option value="PRIV">'; ?>
<?php echo $this->_tpl_vars['MOD']['label_private']; ?>
<?php echo '</option>
    </select>
    {{#globalSharing=="PUB"}}
    '; ?>
<?php echo $this->_tpl_vars['MOD']['label_everyone']; ?>
<?php echo '<reportAccessRights level="{{globalSharingRights}}" />
    {{/globalSharing=="PUB"}}
    <br><br>
    {{#globalSharing=="PRIV"}}
    <div style="display:inline-block;vertical-align:top;">
        <select  style="width:300px;height:100px;" multiple="multiple" on-change="changed" value="{{markedUsers}}">
            {{#usersById:id}}
            {{^selected}}
            <option value="{{id}}">{{name}}</option>
            {{/selected}}
            {{/usersById:id}}
        </select>
    </div>
    <div style="display:inline-block;vertical-align:top;padding-top:50px">
        <a href="#" on-click="selectUsers:{{markedUsers}}">
            <img alt="->" src="modules/AnalyticReporting/assets/img/arrow_right.png" />
        </a>
    </div>
    <div style="margin-bottom:-7px;border:1px solid darkgrey;min-height:100px;display:inline-block;width: 30em;">
        <table>
        {{#usersById:id}}
            {{#selected}}
            <tr>
                <td>{{name}}</td>
                <td><reportAccessRights level="{{accessRights}}"/></td>
                <td><a href="#" on-click="removeUser:{{id}}" style="margin-left:2px;"><img src="modules/AnalyticReporting/assets/img/cross_grey.png" alt="x" style="height:8px;width:8px;" /></a></td>
            </tr>
            {{/selected}}
        {{/usersById:id}}
        <table>
    </div>
    {{/globalSharing=="PRIV"}}
</script>

<script id="reportSchedulingTemplate" type="text/ractive-template">
    <label><input type="checkbox" checked="{{isScheduled}}" /> '; ?>
<?php echo $this->_tpl_vars['MOD']['label_schedule_report']; ?>
<?php echo '</label><br>
    {{#isScheduled}}
    '; ?>
<?php echo $this->_tpl_vars['MOD']['label_frequency']; ?>
<?php echo ':
        <selectBox titleName="title" valueName="value" selected="{{interval}}" options="{{intervalAvailableValues}}"/>
    {{#interval==1 || interval==2}}
            {{#interval==2}}
            '; ?>
<?php echo $this->_tpl_vars['MOD']['label_week_of_month']; ?>
<?php echo ': <selectBox selected="{{intervalOptions.1}}" options="{{monthweeks}}" titleName="title" valueName="val"/>
            {{/interval==2}}
            '; ?>
<?php echo $this->_tpl_vars['MOD']['label_day']; ?>
<?php echo ': <selectBox selected="{{intervalOptions.0}}" options="{{weekdays}}" titleName="title" valueName="val"/>

    {{/interval==1 || interval==2}}
    {{#interval==3 || interval==4}}
        {{#interval==4}}
            '; ?>
<?php echo $this->_tpl_vars['MOD']['label_month']; ?>
<?php echo ':
            <selectBox selected="{{intervalOptions.0}}" options="{{months}}" titleName="title" valueName="val"/>
        {{/interval==4}}
            '; ?>
<?php echo $this->_tpl_vars['MOD']['label_day']; ?>
<?php echo ':
            <selectBox selected="{{intervalOptions.1}}" options="{{days}}" titleName="title" valueName="val"/>
    {{/interval==3 || interval==4}}
    '; ?>
<?php echo $this->_tpl_vars['MOD']['label_time']; ?>
<?php echo ': <selectBox selected="{{timeH}}" options="{{hours}}" titleName="h" valueName="h" /> : <selectBox selected="{{timeM}}" options="{{minutes}}" titleName="m" valueName="m" /> (hh:mm)
    <br>
    <strong>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_export_format']; ?>
<?php echo '</strong><br>
		    <label><input type="checkbox" checked="{{scheduledFormats.xlsx}}"> '; ?>
<?php echo $this->_tpl_vars['MOD']['label_export_send_xlsx']; ?>
<?php echo '</label>
		    <label><input type="checkbox" checked="{{scheduledFormats.pdf}}"> '; ?>
<?php echo $this->_tpl_vars['MOD']['label_export_send_pdf']; ?>
<?php echo '</label>
		    <label><input type="checkbox" checked="{{scheduledFormats.url}}"> '; ?>
<?php echo $this->_tpl_vars['MOD']['label_export_send_url']; ?>
<?php echo '</label>
    <br>
        <div style="display:inline-block;">
            <select  style="width:300px;height:100px;" multiple="multiple" on-change="changed" value="{{markedUsers}}">
                {{#usersById:id}}
                {{^selected}}
                <option value="{{id}}">{{name}}</option>
                {{/selected}}
                {{/usersById:id}}
            </select>
        </div>
        <div style="display:inline-block;vertical-align:top;padding-top:50px">
            <a href="#" on-click="selectUsers:{{markedUsers}}">
                <img alt="->" src="modules/AnalyticReporting/assets/img/arrow_right.png" />
            </a>
        </div>
        <div style="margin-bottom:-7px;border:1px solid darkgrey;min-height:100px;display:inline-block;width: 30em;vertical-align:top;">
            <table>
                {{#usersById:id}}
                {{#selected}}
                <tr>
                    <td>{{name}}</td>
                    <td><a href="#" on-click="removeUser:{{id}}" style="margin-left:2px;"><img src="modules/AnalyticReporting/assets/img/cross_grey.png" alt="x" style="height:8px;width:8px;" /></a></td>
                </tr>
                {{/selected}}
                {{/usersById:id}}
                <table>
        </div>
    {{/isScheduled}}
    <br>
</script>

<script id="reportLabelsTemplate" type="text/ractive-template">
{{#labels.length}}
<table class="ar-data-table">
	<thead>
		<tr>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_original_report_label']; ?>
<?php echo '</th>
			<th>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_new_report_label']; ?>
<?php echo '</th>
		</tr>
	</thead>
	<tbody>
		{{#labels}}
		<tr>
			<td>{{origValue}}</td>
			<td><input type="text" style="border:1px solid #ccc;width:97%;" value="{{value}}" /></td>
		</tr>
		{{/labels}}
	</tbody>
</table>
<br /><br />
<reportButtonPreview on-preview="preview" />
{{/labels.length}}
</script>

<script id="reportCalcFieldManagerTemplate" type="text/ractive-template">
<table class="ar-data-table">
    <thead>
    <tr>'; ?>

        <th><?php echo $this->_tpl_vars['MOD']['label_field']; ?>
</th>
        <th><?php echo $this->_tpl_vars['MOD']['label_calc_formula']; ?>
</th>
        <th><?php echo $this->_tpl_vars['MOD']['label_formula']; ?>
<?php echo '</th>
        <th>&nbsp;</th>
    </tr>
    </thead>
    <tbody>
    {{#calcFields:i}}
    <tr>
        <td><input type="text" value="{{calcFields[i].title}}"></td>
        <td><calcField availableFields="{{~/availableFields}}" fns="{{~/fns}}" val="{{calcFields[i].val}}"/></td>
        <td><calcFieldDisplay fieldsByName="{{~/fieldsByName}}" fns="{{~/fns}}" val="{{calcFields[i].val}}"/></td>
        <td><a href="#" on-click="removeItem:{{i}}" class="tooltipX">
                <img src="modules/AnalyticReporting/assets/img/cross.png"/>
                <span>'; ?>
<?php echo $this->_tpl_vars['MOD']['label_remove_item']; ?>
<?php echo '</span>
        </a></td>
    </tr>
    {{/calcFields}}
    </tbody>
</table>
'; ?>

<?php if ($this->_tpl_vars['CANEDIT'] == 1): ?>
    <div style="margin-left:705px">
        <reportBtnGC on-clicked="addField" text="<?php echo $this->_tpl_vars['MOD']['label_add_item']; ?>
"/>
    </div>
<?php endif; ?><?php echo '
    <reportButtonPreview on-preview="preview"/>

<br/><br/>
</script>
<script id="reportCalcFieldTemplate" type="text/ractive-template">
<div style="display: inline-block;border: 0px solid #000000; padding: 0.66em;border-radius:0.33em;background: {{#level % 2}}#d0e5f5{{else}}#ffffff{{/level % 2}}">
    <selectBox selected="{{val.op}}" options="{{fns}}" titleName="title" valueName="name" />
    {{#val.valType:i}}
        <div style="display: inline-block;border: 1px #000000 dotted; border-radius: 0.25em; margin: 0.25em; padding: 0.25em">
            <selectBox selected="{{.}}" options="{{opTypes}}" titleName="title" valueName="name" />
            {{# val.valType[i]=="c"}}
                <input type="text" value="{{val.val[i]}}">
            {{/}}
            {{# val.valType[i]=="f"}}
                <selectBox options="{{availableFieldsFiltered}}" valueName="name" titleName="title" selected="{{val.val[i]}}" />
            {{/}}
            {{# val.valType[i]=="op"}}
                <calcField fns="{{fns}}" val="{{val.val[i]}}" level="{{level+1}}" availableFields="{{~/availableFields}}" fieldsByName="{{~/fieldsByName}}" />
            {{/}}
        </div>
    {{/valType:i}}
</div>
</script>
<script type="text/ractive-template" id="reportCalcFieldDisplayTemplate">
{{fnName}}({{#fnArgs:i}}
    {{.}}
    {{# val.valType[i]=="c"}}{{val.val[i]}}{{/}}
    {{# val.valType[i]=="f"}}{{fieldsByName[val.val[i]].bareTitle}}{{/}}
    {{# val.valType[i]=="op"}}<calcFieldDisplay fns="{{fns}}" val="{{val.val[i]}}" level="{{level+1}}" />{{/}}
{{/}})
</script>

<script type="text/ractive-template" id="reportPaginationTemplate">
{{#isPagination}}
'; ?>
<?php echo $this->_tpl_vars['MOD']['label_page_no']; ?>
<?php echo '
<ul>
{{#pagination}}
	{{#currentPage}}
		<li class="active">{{pageNumber}}</li>
	{{/currentPage}}
	{{^currentPage}}
		{{#pageSeparator}}
		{{symbol}}
		{{/pageSeparator}}
		{{^pageSeparator}}
		<li on-click="changePage(pageNumber)">
			{{pageNumber}}
		</li>
		{{/pageSeparator}}
	{{/currentPage}}
{{/pagination}}
</ul>
{{/isPagination}}

{{#showLimitInput}}
<span {{#isPagination}}style="margin-left:20px;"{{/isPagination}}>
'; ?>
<?php echo $this->_tpl_vars['MOD']['label_show']; ?>
<?php echo ' <input value="{{meta.limit}}" size="3" maxlength="3" class="input-mini" /> '; ?>
<?php echo $this->_tpl_vars['MOD']['label_records_per_page']; ?>
<?php echo '
<span>
{{/showLimitInput}}
</script>

'; ?>

<!-- // TEMPLATES -->