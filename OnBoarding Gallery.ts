// Description: Grabs the clear collected list from the Dashboard that sorts Employee list by Created column and orders descending
sortOnBCreated

/*
Sort(
    If(
        FilterFlyoutMenu_1.checkBox_InProg = false && FilterFlyoutMenu_1.checkBox_Complete = false && FilterFlyoutMenu_1.checkBox_New = false,
        modOnBList,
        FilterFlyoutMenu_1.checkBox_InProg = true && FilterFlyoutMenu_1.checkBox_Complete = true && FilterFlyoutMenu_1.checkBox_New = true,
        modOnBList,
        FilterFlyoutMenu_1.checkBox_InProg = true && FilterFlyoutMenu_1.checkBox_Complete = true && FilterFlyoutMenu_1.checkBox_New = false,
        Filter(
            modOnBList,
            EmpStatus = "In Progress" || EmpStatus = "Complete"
        ),
        FilterFlyoutMenu_1.checkBox_InProg = true && FilterFlyoutMenu_1.checkBox_Complete = false && FilterFlyoutMenu_1.checkBox_New = true,
        Filter(
            modOnBList,
            EmpStatus = "In Progress" || EmpStatus = "New"
        ),
        FilterFlyoutMenu_1.checkBox_InProg = false && FilterFlyoutMenu_1.checkBox_Complete = true && FilterFlyoutMenu_1.checkBox_New = true,
        Filter(
            modOnBList,
            EmpStatus = "New" || EmpStatus = "Complete"
        ),
        FilterFlyoutMenu_1.checkBox_InProg = true && FilterFlyoutMenu_1.checkBox_Complete = false && FilterFlyoutMenu_1.checkBox_New = false,
        Filter(
            modOnBList,
            EmpStatus = "In Progress"
        ),
        FilterFlyoutMenu_1.checkBox_InProg = false && FilterFlyoutMenu_1.checkBox_Complete = true && FilterFlyoutMenu_1.checkBox_New = false,
        Filter(
            Employee,
            EmpStatus = "Complete"
        ),
        FilterFlyoutMenu_1.checkBox_InProg = false && FilterFlyoutMenu_1.checkBox_Complete = false && FilterFlyoutMenu_1.checkBox_New = true,
        Filter(
            modOnBList,
            EmpStatus = "New"
        )
    ),
    Created,
    If(
        FilterFlyoutMenu_1.SortFunction = "Descending",
        Descending,
        Ascending
    )
)
*/

