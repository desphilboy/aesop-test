import React from 'react';
import { ExpansionPanel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
									<div style={{ paddingLeft: '30px' }}>
										{subCat.items.map(item => (
											<ExpansionPanel key={item.name}>
												<ExpansionPanelSummary
													key={item.name}
													aria-controls="panel1a-content"
													id="panel1a-header">
													<Typography className={classes.heading}>
														{item.name}
													</Typography>
												</ExpansionPanelSummary>
											</ExpansionPanel>
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
