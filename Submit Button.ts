// Description: When a user selects the "Submit" button the form will check if the OnboardingEditForm is new, if so then it will grab all the inputs from the form and patch user tasks to each department sharepoint list.
// The formula takes all the tasks stored in the department task list and replicates a set for the new user.

// First check if the form is being edited
If(onboarding_EditForm.Mode = FormMode.Edit,

// To be able to send emails, have to add outlook365 as a data source
Office365Outlook.SendEmail(
    "............... "
    & "Name: " & FirstName_Value.Text & " " & LastName_Value.Text & Char(10)
    & "Preferred Name: " & PreferredName_Value.Text & Char(10)
    & "Pronouns: " & Pronounsvalue.Text & Char(10)
    & "Start date: " & StartDate_Value & Char(10)
    & "Manager: " & Manager_Value.SelectedText.Value & Char(10)
    & "Additional Comments: " & AdditionalComments_Value.Text
) // end outlook statement
); // end if statement


If(onboarding_EditForm.Mode = FormMode.New,

// To be able to send emails, have to add outlook365 as a data source
Office365Outlook.SendEmail(
    ".............."
    & "Name: " & FirstName_Value.Text & " " & LastName_Value.Text & Char(10)
    & "Preferred Name: " & PreferredName_Value.Text & Char(10)
    & "Pronouns: " & Pronounsvalue.Text & Char(10)
    & "Start date: " & StartDate_Value & Char(10)
    & "Manager: " & Manager_Value.SelectedText.Value & Char(10)
    & "Additional Comments: " & AdditionalComments_Value.Text
); // end outlook statement


// Patch to HRUserTasks the list of HRTasks, set the EmpID on the HRUserTasks to the text value in val_EmpID in the EmpID_DataCard1, set the TaskID in the HRUserTasks list to the HRTaskID from the HRTasks list. Then submit the form.
ForAll(HRTasks, Patch(HRUserTasks, Defaults(HRUserTasks), {EmpID: EmpID_Value.Text, TaskID: HRTaskID, Status: HRStatus, HRTaskName: TaskName}));

// Patches 'ITTasks' to 'ITUserTasks'
ForAll(ITTasks, Patch(ITUserTasks, Defaults(ITUserTasks), {EmpID: EmpID_Value.Text, TaskID: ITTaskID, Status: ITStatus, ITTaskName: TaskName})); // END IT

// Patches 'OpsTask' to 'OpsUserTasks'
ForAll(OpsTasks, Patch(OpsUserTasks, Defaults(OpsUserTasks), {EmpID: EmpID_Value.Text, OpsTaskID: OpsTaskID, Status: OpsStatus, OpsTaskName: TaskName})); // End OPS

// Patches 'AcctTasks' to 'AcctUserTasks'
ForAll(AcctTasks, Patch(AcctUserTasks, Defaults(AcctUserTasks), {EmpID: EmpID_Value.Text, TaskID: AcctTaskID, Status: AcctStatus, AcctTaskName: TaskName})); // emd Acct

// Patches 'MKTGTasks' to 'MKTGUserTasks'
ForAll(MKTGTasks, Patch(MKTGUserTasks, Defaults(MKTGUserTasks), {EmpID: EmpID_Value.Text, MKTGTaskID: MKTGTaskID, Status: MKTGStatus, MKTGTaskName: TaskName})); // end Marketing

); // end if new statement



SubmitForm(onboarding_EditForm);
Refresh(Employee)
