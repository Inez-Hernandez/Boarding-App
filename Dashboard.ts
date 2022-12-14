// Descirption: This window has 4 functions, 2 clear collects for displaying the next 30 days in ascending order and 2 clear collects that are used to display Onboarding and Offboarding records.
// NewHiresNext30: Filters Employee list and grabs only records that have start dates in the next 30 days and lists them ascending to the 30DayOnboarding gallery
// Source: https://powerusers.microsoft.com/t5/Building-Power-Apps/Count-Items-in-Sharepoint-List/td-p/166900
ClearCollect(
    NewHiresNext30,
    Sort(
        Filter(
            Employee,
            EmpStartDate <= DateAdd(
                Today(),
                30,
                Days
            ),
            EmpStartDate >= DateAdd(
                Today(),
                - 0,
                Days
            )
        ),
        EmpStartDate,
        Ascending
    )
);
// OffboardNext30: Filters OBEmployee list and grabs only records that have end dates in the next 30 days and lists them ascending to the 30DayOffboarding gallery
// Source: https://powerusers.microsoft.com/t5/Building-Power-Apps/Count-Items-in-Sharepoint-List/td-p/166900
ClearCollect(
    OffboardNext30,
    Sort(
        Filter(
            OBEmployee,
            EmpEndDate <= DateAdd(
                Today(),
                30,
                Days
            ),
            EmpEndDate >= DateAdd(
                Today(),
                - 0,
                Days
            )
        ),
        EmpEndDate,
        Ascending
    )
);


// Modification requested on 10/24/2022, sort list by latest entry added, remove the 60 day filters
// Source: https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-sort#:~:text=Sort(%20IceCream%2C%20Quantity%2C%20SortOrder.Descending%20)
ClearCollect(
    sortOnBCreated,
    Sort(Employee, Created, SortOrder.Descending)
);

ClearCollect(
    sortOffBCreated,
    Sort(OBEmployee, Created, SortOrder.Descending)
);


// The following ClearCollects are for the Onboarding and Offboarding gallery Items lists respectively.
// These clear collects are filtering only for records that have start / end dates that are less than x days, so esentially after the 30 days of a records start or end date they are no longer included in the default list of items.
// These filtered lists are then used in the OnbaordingGallery and OffboardingGallery respecitively
// ClearCollect(
//     modOffBList,
//     Filter(
//         OBEmployee,
//         EmpEndDate > DateAdd(
//             Today(),
//             -60,
//             Days
//         )
//     )
// );
// ClearCollect(
//     modOnBList,
//     Filter(
//         Employee,
//         EmpStartDate > DateAdd(
//             Today(),
//             -60,
//             Days
//         )
//     )
// );
