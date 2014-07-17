$(document).ready(function() {

    $("#grid").kendoGrid({
        dataSource: {
            data: data,
        },
        columns: [{
            field: "name",
            title: "Name",
            width: "200px",
            attributes: {
                "class": "name",
            }
        }, {
            field: "implementationStage",
            title: "Implementation Stage",
            width: "200px"
        }, {
            field: "statusMS",
            title: "Status MS",
            attributes: {
                "class": "MSstatus"
            },
            width: "110px"
        }, {
            field: "statusIM",
            title: "Status IM",
            attributes: {
                "class": "IMstatus"
            },
            width: "100px"
        }, {
            field: "statusDICE",
            title: "Status DICE",
            attributes: {
                "class": "DICEstatus"
            },
            width: "120px"
        }, {
            field: "datesPlan",
            title: "Dates Plan",
            attributes: {
                "class": "date"
            },
            width: "120px"
        }, {
            field: "datesUpdate",
            title: "Dates Update",
            attributes: {
                "class": "date"
            },
            width: "140px"
        }, {
            field: "datesActual",
            title: "Dates Actual",
            attributes: {
                "class": "date"
            },
            width: "8em"
        }, {
            field: "datesLastModified",
            title: "Dates Last Modified",
            attributes: {
                "class": "date"
            },
            width: "180px"
        }, {
            field: "owner",
            title: "Owner",
            hidden: true,
            width: "10em"
        }, {
            field: "approver",
            title: "Approver",
            hidden: true,
            width: "10em"
        }, {
            field: "commentaryDice",
            title: "Current Dice Commentary",
            hidden: true,
            width: "250px"
        }, {
            field: "commentaryImpact",
            title: "Impact Commentary",
            hidden: true,
            width: "250px"
        }, {
            field: "commentaryMilestone",
            title: "Milestone Commentary",
            hidden: true,
            width: "250px"
        }, {
            field: "revenueGains",
            title: "Attributable Revenue Gains",
            hidden: true,
            width: "250px"
        }, {
            field: "revenueLosses",
            title: "Attributable <br>Revenue Losses",
            hidden: true,
            width: "200px"
        }, {
            field: "netSavings",
            title: "Net Recurring Savings",
            hidden: true,
            width: "250px"
        }, {
            field: "treeType",
            title: "Net Recurring Savings",
            hidden: true,
            width: "0",
            attributes: {
                "class": "tree-type"
            },
        }],

        //pageSize: 30,
        scrollable: true,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true,

        height: 550,
        sortable: true,
        filterable: false,
        columnMenu: true,
        //pageable: true,
    });

    // apply the treeType to the numbers column for styling
    $('.tree-type').each(function(i, td) {
        var treeType = $(this).text();
        $(this).prevAll('.name').addClass(treeType);
    });

    // Status items need to be transformed into graphics
    $('.MSstatus').each(function(i, td) {
        var statusType = $(this).text();
        switch($(this).text())
        {
            case "red": $(this).html("<span class=\"icon-traffic-light " + $(this).text() + "\"></span>"); break;
            case "yellow": $(this).html("<span class=\"icon-traffic-light " + $(this).text() + "\"></span>"); break;
            case "green": $(this).html("<span class=\"icon-traffic-light " + $(this).text() + "\"></span>"); break;
        }
    });

    $('.IMstatus').each(function(i, td) {
        var statusType = $(this).text();
        switch($(this).text())
        {
            case "red": $(this).html("<span class=\"icon-IM " + $(this).text() + "\"></span>"); break;
            case "yellow": $(this).html("<span class=\"icon-IM " + $(this).text() + "\"></span>"); break;
            case "green": $(this).html("<span class=\"icon-IM " + $(this).text() + "\"></span>"); break;
        }
    });

    $('.DICEstatus').each(function(i, td) {
        var statusType = $(this).text();
        switch($(this).text())
        {
            case "red": $(this).html("<span class=\"icon-DICE " + $(this).text() + "\"></span>"); break;
            case "yellow": $(this).html("<span class=\"icon-DICE " + $(this).text() + "\"></span>"); break;
            case "green": $(this).html("<span class=\"icon-DICE " + $(this).text() + "\"></span>"); break;
        }
    });
});