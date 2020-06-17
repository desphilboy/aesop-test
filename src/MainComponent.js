import React, { useState } from 'react';
import { ExpansionPanel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';

const ItemDisplay = ({ item }) => (
	<div
		style={{
			padding: '10px',
		}}>
		<div> {item.name} </div>
		{item &&
			item.variants &&
			item.variants.map(variant => (
				<div
					style={{
						padding: '10px',
						minWidth: '360px',
						marginBottom: '40px',
						marginTop: '20px',
						border: 'solid 1px pink',
						borderRadius: '10px',
					}}>
					<div> {variant.sku} </div>
					<div>In Stock: {`${variant.inStock}`}</div>
					<img
						src={`https://www.aesop.com/au${variant.thumbnail}`}
						style={{ width: '240px', height: '240px' }}
					/>
					<div>{variant.price}</div>
				</div>
			))}
	</div>
);

const ItemComponent = ({ item }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<Button
				onClick={() => {
					item.drawerIsOpen = true;
					setToggle(!toggle);
				}}>
				{item.name}
			</Button>
			<Drawer
				anchor="left"
				open={!!item.drawerIsOpen}
				onClose={() => {
					item.drawerIsOpen = false;
					setToggle(!toggle);
				}}>
				<ItemDisplay item={item} />
			</Drawer>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

export const MainComponent = ({ data }) => {
	const classes = useStyles;

	return (
		<div className={classes.root}>
			{data &&
				data.categories &&
				data.categories.map(category => (
					<ExpansionPanel key={category.name}>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className={classes.heading}>{category.name}</Typography>
						</ExpansionPanelSummary>
						<div style={{ paddingLeft: '30px' }}>
							{category.items.map(subCat => (
								<ExpansionPanel key={subCat.name}>
									<ExpansionPanelSummary
										key={subCat.name}
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography className={classes.heading}>
											{subCat.name}
										</Typography>
									</ExpansionPanelSummary>
									<div style={{ paddingLeft: '60px' }}>
										{subCat.items.map(item => (
											<ItemComponent key={item.name} item={item} />
										))}
									</div>
								</ExpansionPanel>
							))}
						</div>
					</ExpansionPanel>
				))}
		</div>
	);
};
