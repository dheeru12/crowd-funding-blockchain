import React,{Component} from 'react';
import Layout from '../../components/Layout'; 
import Campaign from '../../ethereum/campaign';
import { Card,Grid, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/Contributeform';
import {Link} from '../../routes';
class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign=Campaign(props.query.address);
        const summary=await campaign.methods.getSummary().call();

        return {
            address:props.query.address,
          minimumContribution:summary[0],
          balance:summary[1],
          requestscount:summary[2],
          approverscount:summary[3],
          manager:summary[4]
        };
    }
    renderCards(){
        const {
            balance,manager,minimumContribution,requestscount,approverscount}=this.props;
        const items= [
            {
                header:manager,
                meta: 'address of Manager',
                description:'The manager creataed this campaign and can create requests to withdraw money',
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minimum contribution(wei)',
                description:'you must contribute atleast this much amount to become a contributor',
                style:{overflowWrap:'break-word'}
            },
            {
                header:approverscount,
                meta:'number of approvers for the campaign',
                description:'number of people who already donated',
                style:{overflowWrap:'break-word'}
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Balance of Campaign',
                description:'Total amount donated by approvers',
                style:{overflowWrap:'break-word'}
            },
            {
                header:requestscount,
                meta:'Number of requests',
                description:'requests made by manager to spend money',
                style:{overflowWrap:'break-word'}
            }

        ];

        return <Card.Group items={items} />


    }
    render(){
        return (
        <Layout>
            <h3>Campaign Shoew!!</h3>
            <Grid>
                <Grid.Column width={10}>
                {this.renderCards()}
                <Link route={`${this.props.address}/requests`}>
                    <a>
                        <Button style={{marginTop:"10px"}} primary>View Requests</Button>
                    </a>
                </Link>
                </Grid.Column>
                <Grid.Column width={6}>
                <ContributeForm address={this.props.address}/>
                </Grid.Column>
            </Grid>
            
            
        </Layout>
        );
    }
}

export default CampaignShow;