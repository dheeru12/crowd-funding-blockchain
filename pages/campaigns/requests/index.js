import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address}=props.query;
        const campaign = Campaign(address);
        const requestcount=await campaign.methods.getRequestsCount().call();
        const approverscount=await campaign.methods.approverscount().call();
        console.log(requestcount)
        const requests=[];
        for(var i=0;i<requestcount;i++){
            requests.push(await campaign.methods.requests(i).call());
        }
        console.log(requests);
        return {address,requests,approverscount,requestcount};
    }
    renderRows(){
        return this.props.requests.map((request,index)=>{
            return <RequestRow key={index} id={index} request={request} address={this.props.address} approverscount={this.props.approverscount}/>
        });
    }
    render(){
        const { Header ,Body ,Row ,HeaderCell}=Table;
        return(
            <Layout>
                <h3>request</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{marginBottom:10}}>
                            Add request
                        </Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recepient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <div>Found {this.props.requestcount} requests</div>
            </Layout>
        );
    }
}

export default RequestIndex;