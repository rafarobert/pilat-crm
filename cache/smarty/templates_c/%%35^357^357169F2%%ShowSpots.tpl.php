<?php /* Smarty version 2.6.31, created on 2020-11-16 17:51:50
         compiled from modules/Spots/tpl/ShowSpots.tpl */ ?>
<link rel="stylesheet" type="text/css" href="include/javascript/c3/c3.min.css">
<script type="text/javascript" src="include/javascript/touchPunch/jquery.ui.touch-punch.min.js"></script>
<link rel="stylesheet" type="text/css" href="include/javascript/pivottable/pivot.css">
<script type="text/javascript" src="include/javascript/suitespots/suitespots.js"></script>
<?php echo '
<script>
    function snapshotForm(theForm) {
        var snapshotTxt = \'\';
        var elemList = theForm.elements;
        var elem;
        var elemType;

        for (var i = 0; i < elemList.length; i++) {
            elem = elemList[i];

            //The pvtRenderer and pvtAggregator checks are to not add the suite spot items
            //I have used $.hasClass as the element.classlist.contains is not implemented in all browsers
            if (typeof(elem.type) == \'undefined\' || $(elem).hasClass(\'pvtRenderer\') || $(elem).hasClass(\'pvtAggregator\') || $(elem).hasClass(\'pvtAttrDropdown\')) {
                continue;
            }
            elemType = elem.type.toLowerCase();
            snapshotTxt = snapshotTxt + elem.name;

            if (elemType == \'text\' || elemType == \'textarea\' || elemType == \'password\') {
                snapshotTxt = snapshotTxt + elem.value;
            }
            else if (elemType == \'select\' || elemType == \'select-one\' || elemType == \'select-multiple\') {
                var optionList = elem.options;
                for (var ii = 0; ii < optionList.length; ii++) {
                    if (optionList[ii].selected) {
                        snapshotTxt = snapshotTxt + optionList[ii].value;
                    }
                }
            }

            else if (elemType == \'radio\' || elemType == \'checkbox\') {
                if (elem.selected) {
                    snapshotTxt = snapshotTxt + \'checked\';
                }
            }
            else if (elemType == \'hidden\') {
                //Remove the whitespace around elements to facilitate the comparison of changed values
                //http://stackoverflow.com/a/31502096
                snapshotTxt = snapshotTxt + elem.value.replace(/("[^"]*")|\\s/g, "$1");
            }
        }

        return snapshotTxt;
    }

    var SpotsObj = (function () {
        const _this = this;
        const buttonIds = [\'SAVE_HEADER\', \'SAVE_FOOTER\', \'save_and_continue\'];

        this.setEvents = function (buttons) {
            for (var i = 0; i < buttons.length; i++) {
                var button = document.getElementById(buttons[i]);

                if (button) {
                    button.addEventListener(\'click\', function () {
                        window.onbeforeunload = sendAndRedirect(\'EditView\', \'Saving Spots...\', \'?module=Spots\');
                    });
                }
            }
        };
        function resetButtons() {
            if (document.getElementById(\'EditView\')) {
                _this.setEvents(buttonIds);
            }
        }

        var result = {};
        result.resetButtons = resetButtons;

        return result;
    })();

    SpotsObj.resetButtons();
</script>
'; ?>


<div id="output" style="overflow: auto"></div>