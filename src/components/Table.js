import React from 'react';

import {
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import dayjs from 'dayjs';






const Table = ({ repos, filter }) => {
	const getCard = (repo) => {
    return (
      <Grid item xs={12} md={4} key={repo.name}>
      <a href={repo.html_url} rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h2" >{`${repo.name}`}</Typography>
            <Typography variant="h6" component="h2" >{`Forks: ${repo.forks_count}`}</Typography>
            <Typography variant="h6" component="h2" >{`Open Issues: ${repo.open_issues_count}`}</Typography>
			<Typography variant="h6" component="h2" >{`Latest Push: ${dayjs(repo.pushed_at).format('DD/MM/YYYY')}`}</Typography>
                        
          </CardContent>
        </Card>
        </a>
      </Grid>
    );
  };


    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  justify="space-around" style={{padding: "2rem"}}>

	    {repos.length > 0 && repos.map(
	    	(repo) =>
	    		repo.name.includes(filter) &&
	    		getCard(repo)
		)}	    
	    </Grid>
    );
};

export default Table;
