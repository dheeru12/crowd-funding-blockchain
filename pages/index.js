import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns=await factory.methods.getDeployedcampaigns().call();

        return {campaigns};
    }
    rendercamapigns(){
       const items=this .props.campaigns.map(
           address => {
               return {
                   header : address,
                   description:(
                    <Link route={`/campaigns/${address}`}>
                        <a>View campaigns</a>
                    </Link>
                    
                    ),
                   fluid:true
               }
           });
        return <Card.Group items={items}/> 
    }
    render(){
        return <Layout>
            <Link route="/campaigns/new">
                <a>
                    <Button
                        content="Create Campaign"
                        icon="add circle"
                        primary
                        floated="right"
                    />
                </a>
            </Link>
            {this.rendercamapigns()} 
            
            </Layout>
        
    }
}

export default CampaignIndex;