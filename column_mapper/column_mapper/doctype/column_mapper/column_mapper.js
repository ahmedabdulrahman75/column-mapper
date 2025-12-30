// Copyright (c) 2025, Ahmed AbdulRahman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Column Mapper", {
	refresh(frm) {
		frm.add_custom_button(__("Import Data"), () => {
			frm.call("import_data")
		});
	},
});
