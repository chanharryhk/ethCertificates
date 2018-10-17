import { Connect, SimpleSigner } from 'uport-connect'

// export let uport = new Connect('TruffleBox')

// WARNING SHOULD NOT USE THIS IN A PRODUCTION WEBSITE
export const uport = new Connect('QTMA ethCertificates', {
    clientId: '2p1TH7FabMubaNNKf3yWoA45yWBLmXbCN2t',
    network: 'rinkeby',
    signer: SimpleSigner('2be52f9204b73c9463d960ce87701a74210ca29d560fc11906fd3b8089247776')
})


export const web3 = uport.getWeb3()
