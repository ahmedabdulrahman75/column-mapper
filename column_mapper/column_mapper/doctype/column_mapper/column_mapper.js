// Copyright (c) 2025, Ahmed AbdulRahman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Column Mapper", {
	refresh(frm) {
		frm.add_custom_button(__("Import Data"), () => {
			frm.call("import_data").then(() => {
				frappe.msgprint({
					title: __("Notification"),
					indicator: "green",
					message: __("Data Imported Successfully"),
				});
			});
			frappe.msgprint({
				title: __("Notification"),
				indicator: "green",
				message: __("Importing in Progress"),
			});
		});
	},

	document_type(frm) {
		cur_frm.set_value("ref_doc", "");
		cur_frm.set_value("doc_field", "");
	},
});
