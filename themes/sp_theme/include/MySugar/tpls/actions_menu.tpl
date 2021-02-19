<ul class="dropdown-menu tab-actions">
    {if !$lock_homepage}
        <li>
            <a class="addDashlets"  data-toggle="modal" data-target=".modal-add-dashlet">{$lblAddDashlets}</a>
        </li>
        <li>
            <a class="addDashboard"  data-toggle="modal" data-target=".modal-add-dashboard">
                <span>{$lblAddTab}</span>
            </a>
        </li>
        <li>
            <a class="addDashboard"  data-toggle="modal" data-target=".modal-edit-dashboard">
                <span>{$app.LBL_EDIT_TAB}</span>
            </a>
        </li>
    {/if}
</ul>
