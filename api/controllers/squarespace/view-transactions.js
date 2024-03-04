module.exports = {

    friendlyName: 'View transactions',

    description: 'Display "Transactions" page.',

    exits: {

        success: {
        viewTemplatePath: 'pages/squarespace/transactions'
        }

    }, 

    fn: async function () {

        const transactions = await Transaction.find();

        return { transactions };

    }

};