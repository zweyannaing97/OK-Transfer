export const menuItems = [

    {
        displayName: 'Dashboard',
        route: 'dashboard',
        iconName: '../../../../assets/img/icons/SideBar-Icon/Dashboard.svg',


        children: []
      },
      {
        displayName: 'User Role Master',
        route: '',
        iconName: '../../../../assets/img/icons/SideBar-Icon/B Master.svg',
        children: [
          {
            displayName: 'Company',
            route: 'user-role-master/company-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Company.svg',
            children: [

            ]
          },
          {
            displayName: 'Department',
            route: 'user-role-master/department-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Department.svg',
            children: []
          },
          {
            displayName: 'Designation',
            route: 'user-role-master/designation-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Designation.svg',
            children: []
          },
        ]
      },
      {
        displayName: 'User Role Permission',
        route: 'user-role-permission',
        iconName: '../../../../assets/img/icons/SideBar-Icon/User Role Permission.svg',
        children: []
      },

      {
        displayName: 'Transfer',
        route: '',
        iconName: '../../../../assets/img/icons/SideBar-Icon/Transfer.svg',
        children: [
          {
            displayName: 'Main To Cash Back Account',
            route: 'transfer/main-to-cash-back-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Main To Cash icon.svg',
            children: []
          },
          {
            displayName: 'Cash Back To Main Account',
            route: 'transfer/cash-back-to-main-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Cash Back To Main.svg',
            children: []
          },
          {
            displayName: 'Main To Other Cash Back Account',
            route: 'transfer/main-to-other-cash-back-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Main To Other Cash Back.svg',
            children: []
          },
          {
            displayName: 'Cash Back To Other Main Account',
            route: 'transfer/cash-back-to-other-main-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Cash To Other Main.svg',
            children: []
          },
          {
            displayName: 'Pay To',
            route: 'transfer/pay-to',
            iconName: '../../../../assets/img/icons/SideBar-Icon/pay to report icon-01.svg',
            children: []
          },
        ]
      },

      {
        displayName: 'Report',
        route: '',
        iconName: '../../../../assets/img/icons/SideBar-Icon/Report.svg',
        children: [
          {
            displayName: 'Cash Back Report',
            route: 'report/cash-back-report-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Cash Back Report icon .svg',
            children: []
          },
          {
            displayName: 'Pay To Report',
            route: 'report/payto-report-listing',
            iconName: '../../../../assets/img/icons/SideBar-Icon/Pay To report Icon Gray.svg',
            children: []
          },

        ]
      },


      {
        displayName: 'Change Password',
        route: 'ChangePassword',
        iconName: 'assets/img/icons/SideBar-Icon/change password.svg',
        children: []
      },
      {
        displayName: 'Logout',
        route: 'Logout',
        iconName: '../../../../assets/img/icons/SideBar-Icon/log out.svg',
        children: []
      },

]
