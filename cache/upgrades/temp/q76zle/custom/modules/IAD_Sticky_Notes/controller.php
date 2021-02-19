<?php
class IAD_Sticky_NotesController extends SugarController {
    function action_archive() {
        $this->view = 'archive';
    }
    function action_getlist() {
        $this->view = 'getlist';
    }

}
?>