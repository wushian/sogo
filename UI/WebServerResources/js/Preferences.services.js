!function(){"use strict";function a(){var b=this;this.defaults={},this.settings={},this.defaultsPromise=a.$$resource.fetch("jsonDefaults").then(function(c){var d=_.object(_.map(c.SOGoMailLabelsColors,function(a,b){return"$"==b.charAt(0)?["_"+b,a]:[b,a]}));return c.SOGoMailLabelsColors=d,c.Vacation?(c.Vacation.endDate?c.Vacation.endDate=new Date(1e3*parseInt(c.Vacation.endDate)):(c.Vacation.endDateEnabled=0,c.Vacation.endDate=new Date),c.Vacation.autoReplyEmailAddresses&&c.Vacation.autoReplyEmailAddresses.length?c.Vacation.autoReplyEmailAddresses=c.Vacation.autoReplyEmailAddresses.join(","):delete c.Vacation.autoReplyEmailAddresses):c.Vacation={},angular.isUndefined(c.Vacation.autoReplyEmailAddresses)&&angular.isDefined(window.defaultEmailAddresses)&&(c.Vacation.autoReplyEmailAddresses=window.defaultEmailAddresses),angular.isUndefined(c.Vacation.daysBetweenResponse)&&(c.Vacation.daysBetweenResponse=7),angular.isUndefined(c.Vacation.endDate)&&(c.Vacation.endDateEnabled=0,c.Vacation.endDate=new Date),c.Forward&&c.Forward.forwardAddress&&(c.Forward.forwardAddress=c.Forward.forwardAddress.join(",")),angular.isUndefined(c.SOGoCalendarCategoriesColors)&&(c.SOGoCalendarCategoriesColors={},c.SOGoCalendarCategories=[]),angular.isUndefined(c.SOGoContactsCategories)&&(c.SOGoContactsCategories=[]),angular.extend(b.defaults,c),angular.extend(a.$mdDateLocaleProvider,c.locale),a.$mdDateLocaleProvider.firstDayOfWeek=parseInt(c.SOGoFirstDayOfWeek),a.$mdDateLocaleProvider.weekNumberFormatter=function(a){return l("Week %d",a)},a.$mdDateLocaleProvider.msgCalendar=l("Calender"),a.$mdDateLocaleProvider.msgOpenCalendar=l("Open Calendar"),a.$mdDateLocaleProvider.parseDate=function(b){return b?b.parseDate(a.$mdDateLocaleProvider,c.SOGoShortDateFormat):new Date(NaN)},a.$mdDateLocaleProvider.formatDate=function(b){return b?b.format(a.$mdDateLocaleProvider,c.SOGoShortDateFormat):""},a.$mdDateLocaleProvider.formatTime=function(b){return b?b.format(a.$mdDateLocaleProvider,c.SOGoTimeFormat):""},b.defaults}),this.settingsPromise=a.$$resource.fetch("jsonSettings").then(function(c){return c.Calendar&&(c.Calendar.PreventInvitationsWhitelist?c.Calendar.PreventInvitationsWhitelist=_.map(c.Calendar.PreventInvitationsWhitelist,function(b,c){var d=/^(.+)\s<(\S+)>$/.exec(b);return new a.$User({uid:c,cn:d[1],c_email:d[2]})}):c.Calendar.PreventInvitationsWhitelist=[]),angular.extend(b.settings,c),b.settings})}a.$factory=["$q","$timeout","$log","$mdDateLocale","sgSettings","Resource","User",function(b,c,d,e,f,g,h){return angular.extend(a,{$q:b,$timeout:c,$log:d,$mdDateLocaleProvider:e,$$resource:new g(f.activeUser("folderURL"),f.activeUser()),activeUser:f.activeUser(),$User:h}),new a}];try{angular.module("SOGo.PreferencesUI")}catch(b){angular.module("SOGo.PreferencesUI",["SOGo.Common"])}angular.module("SOGo.PreferencesUI").factory("Preferences",a.$factory),a.prototype.ready=function(){return a.$q.all([this.defaultsPromise,this.settingsPromise])},a.prototype.$save=function(){return a.$$resource.save("Preferences",this.$omit(!0)).then(function(a){return a})},a.prototype.$omit=function(a){var b,c,d;return b={},d={},angular.forEach(this,function(c,d){"constructor"!=d&&"$"!=d[0]&&(a?b[d]=angular.copy(c):b[d]=c)}),c=_.object(_.map(b.defaults.SOGoMailLabelsColors,function(a,b){return"_"==b.charAt(0)&&"$"==b.charAt(1)?b.length>2&&"$"==b.charAt(2)?[a[0].toLowerCase().replace(/[ \(\)\/\{%\*<>\\\"]/g,"_"),a]:[b.substring(1),a]:[b,a]})),b.defaults.SOGoMailLabelsColors=c,b.defaults.Vacation&&(b.defaults.Vacation.endDateEnabled?b.defaults.Vacation.endDate=b.defaults.Vacation.endDate.getTime()/1e3:b.defaults.Vacation.endDate=0,b.defaults.Vacation.autoReplyEmailAddresses?b.defaults.Vacation.autoReplyEmailAddresses=_.filter(b.defaults.Vacation.autoReplyEmailAddresses.split(","),function(a){return a.length}):b.defaults.Vacation.autoReplyEmailAddresses=[]),b.defaults.Forward&&b.defaults.Forward.forwardAddress&&(b.defaults.Forward.forwardAddress=b.defaults.Forward.forwardAddress.split(",")),b.settings.Calendar&&b.settings.Calendar.PreventInvitationsWhitelist&&(_.each(b.settings.Calendar.PreventInvitationsWhitelist,function(a){d[a.uid]=a.$shortFormat()}),b.settings.Calendar.PreventInvitationsWhitelist=d),b}}();
//# sourceMappingURL=Preferences.services.js.map