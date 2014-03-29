Ext.define('PhotoEditor.view.Info', {
	extend: 'Ext.Panel',
	xtype: 'info',

	config: {
		layout: 'fit',
		style: 'background: black;',
		items: [{
			xtype: 'button',
			cls: 'info-back-btn',
			text: 'Back',
			bottom: 10,
			right: 10
		}]
	}
});