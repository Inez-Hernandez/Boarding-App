/* Description: Gallery records are pulled from list the modOnBList filtered list from the OnVisible function on the Dashbaord screen.
// the records Status value is set on the Onboarding OnVisible function
// The sidebar filters are set in the below sort:

*/
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
    EmpStartDate,
    If(
        FilterFlyoutMenu_1.SortFunction = "Descending",
        Descending,
        Ascending
    )
)
