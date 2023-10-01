# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Address](#address)
    * [AddressAggregateSelection](#addressaggregateselection)
    * [AddressBoughtConnection](#addressboughtconnection)
    * [AddressBoughtRelationship](#addressboughtrelationship)
    * [AddressEdge](#addressedge)
    * [AddressSoldConnection](#addresssoldconnection)
    * [AddressSoldRelationship](#addresssoldrelationship)
    * [AddressTransactionBoughtAggregationSelection](#addresstransactionboughtaggregationselection)
    * [AddressTransactionBoughtNodeAggregateSelection](#addresstransactionboughtnodeaggregateselection)
    * [AddressTransactionSoldAggregationSelection](#addresstransactionsoldaggregationselection)
    * [AddressTransactionSoldNodeAggregateSelection](#addresstransactionsoldnodeaggregateselection)
    * [AddressesConnection](#addressesconnection)
    * [CreateAddressesMutationResponse](#createaddressesmutationresponse)
    * [CreateDistributionStatsMutationResponse](#createdistributionstatsmutationresponse)
    * [CreateInfo](#createinfo)
    * [CreateNumberAggregatesMutationResponse](#createnumberaggregatesmutationresponse)
    * [CreateTransactionAddressTypeAggregatesMutationResponse](#createtransactionaddresstypeaggregatesmutationresponse)
    * [CreateTransactionCountsMutationResponse](#createtransactioncountsmutationresponse)
    * [CreateTransactionEdgeAggregatesMutationResponse](#createtransactionedgeaggregatesmutationresponse)
    * [CreateTransactionsMutationResponse](#createtransactionsmutationresponse)
    * [CreateVolumeStatsMutationResponse](#createvolumestatsmutationresponse)
    * [DateTimeAggregateSelectionNonNullable](#datetimeaggregateselectionnonnullable)
    * [DeleteInfo](#deleteinfo)
    * [DistributionStat](#distributionstat)
    * [DistributionStatAggregateSelection](#distributionstataggregateselection)
    * [DistributionStatEdge](#distributionstatedge)
    * [DistributionStatsConnection](#distributionstatsconnection)
    * [FloatAggregateSelectionNonNullable](#floataggregateselectionnonnullable)
    * [IntAggregateSelectionNonNullable](#intaggregateselectionnonnullable)
    * [IntAggregateSelectionNullable](#intaggregateselectionnullable)
    * [NumberAggregate](#numberaggregate)
    * [NumberAggregateAggregateSelection](#numberaggregateaggregateselection)
    * [NumberAggregateEdge](#numberaggregateedge)
    * [NumberAggregatesConnection](#numberaggregatesconnection)
    * [PageInfo](#pageinfo)
    * [StringAggregateSelectionNonNullable](#stringaggregateselectionnonnullable)
    * [Transaction](#transaction)
    * [TransactionAddressFrom_addressAggregationSelection](#transactionaddressfrom_addressaggregationselection)
    * [TransactionAddressFrom_addressNodeAggregateSelection](#transactionaddressfrom_addressnodeaggregateselection)
    * [TransactionAddressTo_addressAggregationSelection](#transactionaddressto_addressaggregationselection)
    * [TransactionAddressTo_addressNodeAggregateSelection](#transactionaddressto_addressnodeaggregateselection)
    * [TransactionAddressTypeAggregate](#transactionaddresstypeaggregate)
    * [TransactionAddressTypeAggregateAggregateSelection](#transactionaddresstypeaggregateaggregateselection)
    * [TransactionAddressTypeAggregateEdge](#transactionaddresstypeaggregateedge)
    * [TransactionAddressTypeAggregatesConnection](#transactionaddresstypeaggregatesconnection)
    * [TransactionAggregateSelection](#transactionaggregateselection)
    * [TransactionCount](#transactioncount)
    * [TransactionCountAggregateSelection](#transactioncountaggregateselection)
    * [TransactionCountEdge](#transactioncountedge)
    * [TransactionCountsConnection](#transactioncountsconnection)
    * [TransactionEdge](#transactionedge)
    * [TransactionEdgeAggregate](#transactionedgeaggregate)
    * [TransactionEdgeAggregateAggregateSelection](#transactionedgeaggregateaggregateselection)
    * [TransactionEdgeAggregateEdge](#transactionedgeaggregateedge)
    * [TransactionEdgeAggregatesConnection](#transactionedgeaggregatesconnection)
    * [TransactionFrom_addressConnection](#transactionfrom_addressconnection)
    * [TransactionFrom_addressRelationship](#transactionfrom_addressrelationship)
    * [TransactionTo_addressConnection](#transactionto_addressconnection)
    * [TransactionTo_addressRelationship](#transactionto_addressrelationship)
    * [TransactionsConnection](#transactionsconnection)
    * [UpdateAddressesMutationResponse](#updateaddressesmutationresponse)
    * [UpdateDistributionStatsMutationResponse](#updatedistributionstatsmutationresponse)
    * [UpdateInfo](#updateinfo)
    * [UpdateNumberAggregatesMutationResponse](#updatenumberaggregatesmutationresponse)
    * [UpdateTransactionAddressTypeAggregatesMutationResponse](#updatetransactionaddresstypeaggregatesmutationresponse)
    * [UpdateTransactionCountsMutationResponse](#updatetransactioncountsmutationresponse)
    * [UpdateTransactionEdgeAggregatesMutationResponse](#updatetransactionedgeaggregatesmutationresponse)
    * [UpdateTransactionsMutationResponse](#updatetransactionsmutationresponse)
    * [UpdateVolumeStatsMutationResponse](#updatevolumestatsmutationresponse)
    * [VolumeStat](#volumestat)
    * [VolumeStatAggregateSelection](#volumestataggregateselection)
    * [VolumeStatEdge](#volumestatedge)
    * [VolumeStatsConnection](#volumestatsconnection)
  * [Inputs](#inputs)
    * [AddressBoughtAggregateInput](#addressboughtaggregateinput)
    * [AddressBoughtConnectFieldInput](#addressboughtconnectfieldinput)
    * [AddressBoughtConnectionSort](#addressboughtconnectionsort)
    * [AddressBoughtConnectionWhere](#addressboughtconnectionwhere)
    * [AddressBoughtCreateFieldInput](#addressboughtcreatefieldinput)
    * [AddressBoughtDeleteFieldInput](#addressboughtdeletefieldinput)
    * [AddressBoughtDisconnectFieldInput](#addressboughtdisconnectfieldinput)
    * [AddressBoughtFieldInput](#addressboughtfieldinput)
    * [AddressBoughtNodeAggregationWhereInput](#addressboughtnodeaggregationwhereinput)
    * [AddressBoughtUpdateConnectionInput](#addressboughtupdateconnectioninput)
    * [AddressBoughtUpdateFieldInput](#addressboughtupdatefieldinput)
    * [AddressConnectInput](#addressconnectinput)
    * [AddressConnectWhere](#addressconnectwhere)
    * [AddressCreateInput](#addresscreateinput)
    * [AddressDeleteInput](#addressdeleteinput)
    * [AddressDisconnectInput](#addressdisconnectinput)
    * [AddressOptions](#addressoptions)
    * [AddressRelationInput](#addressrelationinput)
    * [AddressSoldAggregateInput](#addresssoldaggregateinput)
    * [AddressSoldConnectFieldInput](#addresssoldconnectfieldinput)
    * [AddressSoldConnectionSort](#addresssoldconnectionsort)
    * [AddressSoldConnectionWhere](#addresssoldconnectionwhere)
    * [AddressSoldCreateFieldInput](#addresssoldcreatefieldinput)
    * [AddressSoldDeleteFieldInput](#addresssolddeletefieldinput)
    * [AddressSoldDisconnectFieldInput](#addresssolddisconnectfieldinput)
    * [AddressSoldFieldInput](#addresssoldfieldinput)
    * [AddressSoldNodeAggregationWhereInput](#addresssoldnodeaggregationwhereinput)
    * [AddressSoldUpdateConnectionInput](#addresssoldupdateconnectioninput)
    * [AddressSoldUpdateFieldInput](#addresssoldupdatefieldinput)
    * [AddressSort](#addresssort)
    * [AddressUpdateInput](#addressupdateinput)
    * [AddressWhere](#addresswhere)
    * [DistributionStatCreateInput](#distributionstatcreateinput)
    * [DistributionStatOptions](#distributionstatoptions)
    * [DistributionStatSort](#distributionstatsort)
    * [DistributionStatUpdateInput](#distributionstatupdateinput)
    * [DistributionStatWhere](#distributionstatwhere)
    * [NumberAggregateCreateInput](#numberaggregatecreateinput)
    * [NumberAggregateOptions](#numberaggregateoptions)
    * [NumberAggregateSort](#numberaggregatesort)
    * [NumberAggregateUpdateInput](#numberaggregateupdateinput)
    * [NumberAggregateWhere](#numberaggregatewhere)
    * [TransactionAddressTypeAggregateCreateInput](#transactionaddresstypeaggregatecreateinput)
    * [TransactionAddressTypeAggregateOptions](#transactionaddresstypeaggregateoptions)
    * [TransactionAddressTypeAggregateSort](#transactionaddresstypeaggregatesort)
    * [TransactionAddressTypeAggregateUpdateInput](#transactionaddresstypeaggregateupdateinput)
    * [TransactionAddressTypeAggregateWhere](#transactionaddresstypeaggregatewhere)
    * [TransactionConnectInput](#transactionconnectinput)
    * [TransactionConnectWhere](#transactionconnectwhere)
    * [TransactionCountCreateInput](#transactioncountcreateinput)
    * [TransactionCountOptions](#transactioncountoptions)
    * [TransactionCountSort](#transactioncountsort)
    * [TransactionCountUpdateInput](#transactioncountupdateinput)
    * [TransactionCountWhere](#transactioncountwhere)
    * [TransactionCreateInput](#transactioncreateinput)
    * [TransactionDeleteInput](#transactiondeleteinput)
    * [TransactionDisconnectInput](#transactiondisconnectinput)
    * [TransactionEdgeAggregateCreateInput](#transactionedgeaggregatecreateinput)
    * [TransactionEdgeAggregateOptions](#transactionedgeaggregateoptions)
    * [TransactionEdgeAggregateSort](#transactionedgeaggregatesort)
    * [TransactionEdgeAggregateUpdateInput](#transactionedgeaggregateupdateinput)
    * [TransactionEdgeAggregateWhere](#transactionedgeaggregatewhere)
    * [TransactionFrom_addressAggregateInput](#transactionfrom_addressaggregateinput)
    * [TransactionFrom_addressConnectFieldInput](#transactionfrom_addressconnectfieldinput)
    * [TransactionFrom_addressConnectionSort](#transactionfrom_addressconnectionsort)
    * [TransactionFrom_addressConnectionWhere](#transactionfrom_addressconnectionwhere)
    * [TransactionFrom_addressCreateFieldInput](#transactionfrom_addresscreatefieldinput)
    * [TransactionFrom_addressDeleteFieldInput](#transactionfrom_addressdeletefieldinput)
    * [TransactionFrom_addressDisconnectFieldInput](#transactionfrom_addressdisconnectfieldinput)
    * [TransactionFrom_addressFieldInput](#transactionfrom_addressfieldinput)
    * [TransactionFrom_addressNodeAggregationWhereInput](#transactionfrom_addressnodeaggregationwhereinput)
    * [TransactionFrom_addressUpdateConnectionInput](#transactionfrom_addressupdateconnectioninput)
    * [TransactionFrom_addressUpdateFieldInput](#transactionfrom_addressupdatefieldinput)
    * [TransactionOptions](#transactionoptions)
    * [TransactionRelationInput](#transactionrelationinput)
    * [TransactionSort](#transactionsort)
    * [TransactionTo_addressAggregateInput](#transactionto_addressaggregateinput)
    * [TransactionTo_addressConnectFieldInput](#transactionto_addressconnectfieldinput)
    * [TransactionTo_addressConnectionSort](#transactionto_addressconnectionsort)
    * [TransactionTo_addressConnectionWhere](#transactionto_addressconnectionwhere)
    * [TransactionTo_addressCreateFieldInput](#transactionto_addresscreatefieldinput)
    * [TransactionTo_addressDeleteFieldInput](#transactionto_addressdeletefieldinput)
    * [TransactionTo_addressDisconnectFieldInput](#transactionto_addressdisconnectfieldinput)
    * [TransactionTo_addressFieldInput](#transactionto_addressfieldinput)
    * [TransactionTo_addressNodeAggregationWhereInput](#transactionto_addressnodeaggregationwhereinput)
    * [TransactionTo_addressUpdateConnectionInput](#transactionto_addressupdateconnectioninput)
    * [TransactionTo_addressUpdateFieldInput](#transactionto_addressupdatefieldinput)
    * [TransactionUpdateInput](#transactionupdateinput)
    * [TransactionWhere](#transactionwhere)
    * [VolumeStatCreateInput](#volumestatcreateinput)
    * [VolumeStatOptions](#volumestatoptions)
    * [VolumeStatSort](#volumestatsort)
    * [VolumeStatUpdateInput](#volumestatupdateinput)
    * [VolumeStatWhere](#volumestatwhere)
  * [Enums](#enums)
    * [AddressType](#addresstype)
    * [SortDirection](#sortdirection)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [DateTime](#datetime)
    * [Float](#float)
    * [Int](#int)
    * [String](#string)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>addresses</strong></td>
<td valign="top">[<a href="#address">Address</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#addressoptions">AddressOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressesConnection</strong></td>
<td valign="top"><a href="#addressesconnection">AddressesConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#addresssort">AddressSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addressesAggregate</strong></td>
<td valign="top"><a href="#addressaggregateselection">AddressAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactions</strong></td>
<td valign="top">[<a href="#transaction">Transaction</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#transactionoptions">TransactionOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionsConnection</strong></td>
<td valign="top"><a href="#transactionsconnection">TransactionsConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#transactionsort">TransactionSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionsAggregate</strong></td>
<td valign="top"><a href="#transactionaggregateselection">TransactionAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberAggregates</strong></td>
<td valign="top">[<a href="#numberaggregate">NumberAggregate</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#numberaggregatewhere">NumberAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#numberaggregateoptions">NumberAggregateOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberAggregatesConnection</strong></td>
<td valign="top"><a href="#numberaggregatesconnection">NumberAggregatesConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#numberaggregatewhere">NumberAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#numberaggregatesort">NumberAggregateSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberAggregatesAggregate</strong></td>
<td valign="top"><a href="#numberaggregateaggregateselection">NumberAggregateAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#numberaggregatewhere">NumberAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumeStats</strong></td>
<td valign="top">[<a href="#volumestat">VolumeStat</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#volumestatwhere">VolumeStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#volumestatoptions">VolumeStatOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumeStatsConnection</strong></td>
<td valign="top"><a href="#volumestatsconnection">VolumeStatsConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#volumestatwhere">VolumeStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#volumestatsort">VolumeStatSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumeStatsAggregate</strong></td>
<td valign="top"><a href="#volumestataggregateselection">VolumeStatAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#volumestatwhere">VolumeStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distributionStats</strong></td>
<td valign="top">[<a href="#distributionstat">DistributionStat</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#distributionstatwhere">DistributionStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#distributionstatoptions">DistributionStatOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distributionStatsConnection</strong></td>
<td valign="top"><a href="#distributionstatsconnection">DistributionStatsConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#distributionstatwhere">DistributionStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#distributionstatsort">DistributionStatSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distributionStatsAggregate</strong></td>
<td valign="top"><a href="#distributionstataggregateselection">DistributionStatAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#distributionstatwhere">DistributionStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionCounts</strong></td>
<td valign="top">[<a href="#transactioncount">TransactionCount</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactioncountwhere">TransactionCountWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#transactioncountoptions">TransactionCountOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionCountsConnection</strong></td>
<td valign="top"><a href="#transactioncountsconnection">TransactionCountsConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactioncountwhere">TransactionCountWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#transactioncountsort">TransactionCountSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionCountsAggregate</strong></td>
<td valign="top"><a href="#transactioncountaggregateselection">TransactionCountAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactioncountwhere">TransactionCountWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionEdgeAggregates</strong></td>
<td valign="top">[<a href="#transactionedgeaggregate">TransactionEdgeAggregate</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#transactionedgeaggregateoptions">TransactionEdgeAggregateOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionEdgeAggregatesConnection</strong></td>
<td valign="top"><a href="#transactionedgeaggregatesconnection">TransactionEdgeAggregatesConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#transactionedgeaggregatesort">TransactionEdgeAggregateSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionEdgeAggregatesAggregate</strong></td>
<td valign="top"><a href="#transactionedgeaggregateaggregateselection">TransactionEdgeAggregateAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionAddressTypeAggregates</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregate">TransactionAddressTypeAggregate</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#transactionaddresstypeaggregateoptions">TransactionAddressTypeAggregateOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionAddressTypeAggregatesConnection</strong></td>
<td valign="top"><a href="#transactionaddresstypeaggregatesconnection">TransactionAddressTypeAggregatesConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#transactionaddresstypeaggregatesort">TransactionAddressTypeAggregateSort</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionAddressTypeAggregatesAggregate</strong></td>
<td valign="top"><a href="#transactionaddresstypeaggregateaggregateselection">TransactionAddressTypeAggregateAggregateSelection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getTopBuyAddresses</strong></td>
<td valign="top">[<a href="#transactioncount">TransactionCount</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getTopSellAddresses</strong></td>
<td valign="top">[<a href="#transactioncount">TransactionCount</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionAddressTypeAggregate</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregate">TransactionAddressTypeAggregate</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getYearlyVolume</strong></td>
<td valign="top">[<a href="#volumestat">VolumeStat</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getMonthlyVolume</strong></td>
<td valign="top">[<a href="#volumestat">VolumeStat</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getValueDistribution</strong></td>
<td valign="top"><a href="#distributionstat">DistributionStat</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>getGasPriceDistribution</strong></td>
<td valign="top"><a href="#distributionstat">DistributionStat</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionEdgeAggregate</strong></td>
<td valign="top">[<a href="#transactionedgeaggregate">TransactionEdgeAggregate</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">address</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createAddresses</strong></td>
<td valign="top"><a href="#createaddressesmutationresponse">CreateAddressesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#addresscreateinput">AddressCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteAddresses</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">delete</td>
<td valign="top"><a href="#addressdeleteinput">AddressDeleteInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateAddresses</strong></td>
<td valign="top"><a href="#updateaddressesmutationresponse">UpdateAddressesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#addressupdateinput">AddressUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">connect</td>
<td valign="top"><a href="#addressconnectinput">AddressConnectInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">disconnect</td>
<td valign="top"><a href="#addressdisconnectinput">AddressDisconnectInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">create</td>
<td valign="top"><a href="#addressrelationinput">AddressRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">delete</td>
<td valign="top"><a href="#addressdeleteinput">AddressDeleteInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTransactions</strong></td>
<td valign="top"><a href="#createtransactionsmutationresponse">CreateTransactionsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#transactioncreateinput">TransactionCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTransactions</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">delete</td>
<td valign="top"><a href="#transactiondeleteinput">TransactionDeleteInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTransactions</strong></td>
<td valign="top"><a href="#updatetransactionsmutationresponse">UpdateTransactionsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#transactionupdateinput">TransactionUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">connect</td>
<td valign="top"><a href="#transactionconnectinput">TransactionConnectInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">disconnect</td>
<td valign="top"><a href="#transactiondisconnectinput">TransactionDisconnectInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">create</td>
<td valign="top"><a href="#transactionrelationinput">TransactionRelationInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">delete</td>
<td valign="top"><a href="#transactiondeleteinput">TransactionDeleteInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createNumberAggregates</strong></td>
<td valign="top"><a href="#createnumberaggregatesmutationresponse">CreateNumberAggregatesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#numberaggregatecreateinput">NumberAggregateCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteNumberAggregates</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#numberaggregatewhere">NumberAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateNumberAggregates</strong></td>
<td valign="top"><a href="#updatenumberaggregatesmutationresponse">UpdateNumberAggregatesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#numberaggregatewhere">NumberAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#numberaggregateupdateinput">NumberAggregateUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createVolumeStats</strong></td>
<td valign="top"><a href="#createvolumestatsmutationresponse">CreateVolumeStatsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#volumestatcreateinput">VolumeStatCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteVolumeStats</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#volumestatwhere">VolumeStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateVolumeStats</strong></td>
<td valign="top"><a href="#updatevolumestatsmutationresponse">UpdateVolumeStatsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#volumestatwhere">VolumeStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#volumestatupdateinput">VolumeStatUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createDistributionStats</strong></td>
<td valign="top"><a href="#createdistributionstatsmutationresponse">CreateDistributionStatsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#distributionstatcreateinput">DistributionStatCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteDistributionStats</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#distributionstatwhere">DistributionStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateDistributionStats</strong></td>
<td valign="top"><a href="#updatedistributionstatsmutationresponse">UpdateDistributionStatsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#distributionstatwhere">DistributionStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#distributionstatupdateinput">DistributionStatUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTransactionCounts</strong></td>
<td valign="top"><a href="#createtransactioncountsmutationresponse">CreateTransactionCountsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#transactioncountcreateinput">TransactionCountCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTransactionCounts</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactioncountwhere">TransactionCountWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTransactionCounts</strong></td>
<td valign="top"><a href="#updatetransactioncountsmutationresponse">UpdateTransactionCountsMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactioncountwhere">TransactionCountWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#transactioncountupdateinput">TransactionCountUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTransactionEdgeAggregates</strong></td>
<td valign="top"><a href="#createtransactionedgeaggregatesmutationresponse">CreateTransactionEdgeAggregatesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#transactionedgeaggregatecreateinput">TransactionEdgeAggregateCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTransactionEdgeAggregates</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTransactionEdgeAggregates</strong></td>
<td valign="top"><a href="#updatetransactionedgeaggregatesmutationresponse">UpdateTransactionEdgeAggregatesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#transactionedgeaggregateupdateinput">TransactionEdgeAggregateUpdateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createTransactionAddressTypeAggregates</strong></td>
<td valign="top"><a href="#createtransactionaddresstypeaggregatesmutationresponse">CreateTransactionAddressTypeAggregatesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top">[<a href="#transactionaddresstypeaggregatecreateinput">TransactionAddressTypeAggregateCreateInput</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleteTransactionAddressTypeAggregates</strong></td>
<td valign="top"><a href="#deleteinfo">DeleteInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updateTransactionAddressTypeAggregates</strong></td>
<td valign="top"><a href="#updatetransactionaddresstypeaggregatesmutationresponse">UpdateTransactionAddressTypeAggregatesMutationResponse</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">update</td>
<td valign="top"><a href="#transactionaddresstypeaggregateupdateinput">TransactionAddressTypeAggregateUpdateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Address

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top">[<a href="#transaction">Transaction</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#transactionoptions">TransactionOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtAggregate</strong></td>
<td valign="top"><a href="#addresstransactionboughtaggregationselection">AddressTransactionBoughtAggregationSelection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top">[<a href="#transaction">Transaction</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#transactionoptions">TransactionOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldAggregate</strong></td>
<td valign="top"><a href="#addresstransactionsoldaggregationselection">AddressTransactionSoldAggregationSelection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtConnection</strong></td>
<td valign="top"><a href="#addressboughtconnection">AddressBoughtConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#addressboughtconnectionsort">AddressBoughtConnectionSort</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldConnection</strong></td>
<td valign="top"><a href="#addresssoldconnection">AddressSoldConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#addresssoldconnectionsort">AddressSoldConnectionSort</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#addressboughtrelationship">AddressBoughtRelationship</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtRelationship

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transaction">Transaction</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#addresssoldrelationship">AddressSoldRelationship</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldRelationship

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transaction">Transaction</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressTransactionBoughtAggregationSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresstransactionboughtnodeaggregateselection">AddressTransactionBoughtNodeAggregateSelection</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressTransactionBoughtNodeAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetimeaggregateselectionnonnullable">DateTimeAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressTransactionSoldAggregationSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresstransactionsoldnodeaggregateselection">AddressTransactionSoldNodeAggregateSelection</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressTransactionSoldNodeAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetimeaggregateselectionnonnullable">DateTimeAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressesConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#addressedge">AddressEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateAddressesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addresses</strong></td>
<td valign="top">[<a href="#address">Address</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateDistributionStatsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distributionStats</strong></td>
<td valign="top">[<a href="#distributionstat">DistributionStat</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bookmark</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a></td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

This field has been deprecated because bookmarks are now handled by the driver.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodesCreated</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationshipsCreated</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateNumberAggregatesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberAggregates</strong></td>
<td valign="top">[<a href="#numberaggregate">NumberAggregate</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateTransactionAddressTypeAggregatesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionAddressTypeAggregates</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregate">TransactionAddressTypeAggregate</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateTransactionCountsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionCounts</strong></td>
<td valign="top">[<a href="#transactioncount">TransactionCount</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateTransactionEdgeAggregatesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionEdgeAggregates</strong></td>
<td valign="top">[<a href="#transactionedgeaggregate">TransactionEdgeAggregate</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateTransactionsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactions</strong></td>
<td valign="top">[<a href="#transaction">Transaction</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### CreateVolumeStatsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#createinfo">CreateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumeStats</strong></td>
<td valign="top">[<a href="#volumestat">VolumeStat</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### DateTimeAggregateSelectionNonNullable

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DeleteInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bookmark</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a></td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

This field has been deprecated because bookmarks are now handled by the driver.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodesDeleted</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationshipsDeleted</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStat

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#distributionstat">DistributionStat</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatsConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#distributionstatedge">DistributionStatEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### FloatAggregateSelectionNonNullable

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### IntAggregateSelectionNonNullable

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### IntAggregateSelectionNullable

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#numberaggregate">NumberAggregate</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregatesConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#numberaggregateedge">NumberAggregateEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### PageInfo

Pagination information (Relay)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>startCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>endCursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### StringAggregateSelectionNonNullable

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>shortest</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>longest</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Transaction

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#addressoptions">AddressOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_addressAggregate</strong></td>
<td valign="top"><a href="#transactionaddressfrom_addressaggregationselection">TransactionAddressFrom_addressAggregationSelection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">options</td>
<td valign="top"><a href="#addressoptions">AddressOptions</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_addressAggregate</strong></td>
<td valign="top"><a href="#transactionaddressto_addressaggregationselection">TransactionAddressTo_addressAggregationSelection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_addressConnection</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnection">TransactionFrom_addressConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#transactionfrom_addressconnectionsort">TransactionFrom_addressConnectionSort</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_addressConnection</strong></td>
<td valign="top"><a href="#transactionto_addressconnection">TransactionTo_addressConnection</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">where</td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">directed</td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sort</td>
<td valign="top">[<a href="#transactionto_addressconnectionsort">TransactionTo_addressConnectionSort</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressFrom_addressAggregationSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionaddressfrom_addressnodeaggregateselection">TransactionAddressFrom_addressNodeAggregateSelection</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressFrom_addressNodeAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTo_addressAggregationSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionaddressto_addressnodeaggregateselection">TransactionAddressTo_addressNodeAggregateSelection</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTo_addressNodeAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#numberaggregate">NumberAggregate</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#intaggregateselectionnullable">IntAggregateSelectionNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionaddresstypeaggregate">TransactionAddressTypeAggregate</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregatesConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregateedge">TransactionAddressTypeAggregateEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#stringaggregateselectionnonnullable">StringAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#floataggregateselectionnonnullable">FloatAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetimeaggregateselectionnonnullable">DateTimeAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCount

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#intaggregateselectionnonnullable">IntAggregateSelectionNonNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactioncount">TransactionCount</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountsConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#transactioncountedge">TransactionCountEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transaction">Transaction</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregate

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#address">Address</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#numberaggregate">NumberAggregate</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#intaggregateselectionnullable">IntAggregateSelectionNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionedgeaggregate">TransactionEdgeAggregate</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregatesConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#transactionedgeaggregateedge">TransactionEdgeAggregateEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#transactionfrom_addressrelationship">TransactionFrom_addressRelationship</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressRelationship

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#transactionto_addressrelationship">TransactionTo_addressRelationship</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressRelationship

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#address">Address</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionsConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#transactionedge">TransactionEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateAddressesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addresses</strong></td>
<td valign="top">[<a href="#address">Address</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateDistributionStatsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>distributionStats</strong></td>
<td valign="top">[<a href="#distributionstat">DistributionStat</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bookmark</strong> ⚠️</td>
<td valign="top"><a href="#string">String</a></td>
<td>
<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

This field has been deprecated because bookmarks are now handled by the driver.

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodesCreated</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>nodesDeleted</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationshipsCreated</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relationshipsDeleted</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateNumberAggregatesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>numberAggregates</strong></td>
<td valign="top">[<a href="#numberaggregate">NumberAggregate</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateTransactionAddressTypeAggregatesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionAddressTypeAggregates</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregate">TransactionAddressTypeAggregate</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateTransactionCountsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionCounts</strong></td>
<td valign="top">[<a href="#transactioncount">TransactionCount</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateTransactionEdgeAggregatesMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactionEdgeAggregates</strong></td>
<td valign="top">[<a href="#transactionedgeaggregate">TransactionEdgeAggregate</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateTransactionsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transactions</strong></td>
<td valign="top">[<a href="#transaction">Transaction</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateVolumeStatsMutationResponse

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>info</strong></td>
<td valign="top"><a href="#updateinfo">UpdateInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volumeStats</strong></td>
<td valign="top">[<a href="#volumestat">VolumeStat</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStat

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#numberaggregate">NumberAggregate</a></td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatAggregateSelection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#intaggregateselectionnullable">IntAggregateSelectionNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="#intaggregateselectionnullable">IntAggregateSelectionNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#intaggregateselectionnullable">IntAggregateSelectionNullable</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day</strong></td>
<td valign="top"><a href="#intaggregateselectionnullable">IntAggregateSelectionNullable</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatEdge

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#volumestat">VolumeStat</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatsConnection

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#volumestatedge">VolumeStatEdge</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### AddressBoughtAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addressboughtaggregateinput">AddressBoughtAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addressboughtaggregateinput">AddressBoughtAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addressboughtaggregateinput">AddressBoughtAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addressboughtnodeaggregationwhereinput">AddressBoughtNodeAggregationWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtConnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionconnectwhere">TransactionConnectWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top">[<a href="#transactionconnectinput">TransactionConnectInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>overwrite</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not to overwrite any matching relationship with the new properties.

</td>
</tr>
</tbody>
</table>

### AddressBoughtConnectionSort

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionsort">TransactionSort</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtConnectionWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtCreateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactioncreateinput">TransactionCreateInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtDeleteFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top"><a href="#transactiondeleteinput">TransactionDeleteInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtDisconnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top"><a href="#transactiondisconnectinput">TransactionDisconnectInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top">[<a href="#addressboughtcreatefieldinput">AddressBoughtCreateFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top">[<a href="#addressboughtconnectfieldinput">AddressBoughtConnectFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtNodeAggregationWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addressboughtnodeaggregationwhereinput">AddressBoughtNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addressboughtnodeaggregationwhereinput">AddressBoughtNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addressboughtnodeaggregationwhereinput">AddressBoughtNodeAggregationWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_EQUAL</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_EQUAL</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_GT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_GT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_GTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_GTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_LT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_LT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_LTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_LTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtUpdateConnectionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionupdateinput">TransactionUpdateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressBoughtUpdateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top">[<a href="#addressboughtcreatefieldinput">AddressBoughtCreateFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top">[<a href="#addressboughtconnectfieldinput">AddressBoughtConnectFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#addressboughtupdateconnectioninput">AddressBoughtUpdateConnectionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top">[<a href="#addressboughtdeletefieldinput">AddressBoughtDeleteFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top">[<a href="#addressboughtdisconnectfieldinput">AddressBoughtDisconnectFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressConnectInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top">[<a href="#addressboughtconnectfieldinput">AddressBoughtConnectFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top">[<a href="#addresssoldconnectfieldinput">AddressSoldConnectFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressConnectWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top"><a href="#addressboughtfieldinput">AddressBoughtFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top"><a href="#addresssoldfieldinput">AddressSoldFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressDeleteInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top">[<a href="#addressboughtdeletefieldinput">AddressBoughtDeleteFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top">[<a href="#addresssolddeletefieldinput">AddressSoldDeleteFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressDisconnectInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top">[<a href="#addressboughtdisconnectfieldinput">AddressBoughtDisconnectFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top">[<a href="#addresssolddisconnectfieldinput">AddressSoldDisconnectFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#addresssort">AddressSort</a>!]</td>
<td>

Specify one or more AddressSort objects to sort Addresses by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top">[<a href="#addressboughtcreatefieldinput">AddressBoughtCreateFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top">[<a href="#addresssoldcreatefieldinput">AddressSoldCreateFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addresssoldaggregateinput">AddressSoldAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addresssoldaggregateinput">AddressSoldAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addresssoldaggregateinput">AddressSoldAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresssoldnodeaggregationwhereinput">AddressSoldNodeAggregationWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldConnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionconnectwhere">TransactionConnectWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top">[<a href="#transactionconnectinput">TransactionConnectInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>overwrite</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not to overwrite any matching relationship with the new properties.

</td>
</tr>
</tbody>
</table>

### AddressSoldConnectionSort

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionsort">TransactionSort</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldConnectionWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldCreateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactioncreateinput">TransactionCreateInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldDeleteFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top"><a href="#transactiondeleteinput">TransactionDeleteInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldDisconnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top"><a href="#transactiondisconnectinput">TransactionDisconnectInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top">[<a href="#addresssoldcreatefieldinput">AddressSoldCreateFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top">[<a href="#addresssoldconnectfieldinput">AddressSoldConnectFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldNodeAggregationWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addresssoldnodeaggregationwhereinput">AddressSoldNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addresssoldnodeaggregationwhereinput">AddressSoldNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addresssoldnodeaggregationwhereinput">AddressSoldNodeAggregationWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MIN_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_MAX_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_SUM_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MIN_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_MAX_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_SUM_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_AVERAGE_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MIN_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MAX_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUM_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_EQUAL</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_EQUAL</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_GT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_GT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_GTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_GTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_LT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_LT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MIN_LTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_MAX_LTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldUpdateConnectionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionupdateinput">TransactionUpdateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressSoldUpdateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top">[<a href="#addresssoldcreatefieldinput">AddressSoldCreateFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top">[<a href="#addresssoldconnectfieldinput">AddressSoldConnectFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#addresssoldupdateconnectioninput">AddressSoldUpdateConnectionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top">[<a href="#addresssolddeletefieldinput">AddressSoldDeleteFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top">[<a href="#addresssolddisconnectfieldinput">AddressSoldDisconnectFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressSort

Fields to sort Addresses by. The order in which sorts are applied is not guaranteed when specifying many fields in one AddressSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### AddressUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought</strong></td>
<td valign="top">[<a href="#addressboughtupdatefieldinput">AddressBoughtUpdateFieldInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold</strong></td>
<td valign="top">[<a href="#addresssoldupdatefieldinput">AddressSoldUpdateFieldInput</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### AddressWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#addresswhere">AddressWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#addresswhere">AddressWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_IN</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_CONTAINS</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_STARTS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_ENDS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type_IN</strong></td>
<td valign="top">[<a href="#addresstype">AddressType</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtAggregate</strong></td>
<td valign="top"><a href="#addressboughtaggregateinput">AddressBoughtAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought_ALL</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where all of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought_NONE</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where none of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought_SINGLE</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where one of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>bought_SOME</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where some of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldAggregate</strong></td>
<td valign="top"><a href="#addresssoldaggregateinput">AddressSoldAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold_ALL</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where all of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold_NONE</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where none of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold_SINGLE</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where one of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sold_SOME</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td>

Return Addresses where some of the related Transactions match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtConnection_ALL</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td>

Return Addresses where all of the related AddressBoughtConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtConnection_NONE</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td>

Return Addresses where none of the related AddressBoughtConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtConnection_SINGLE</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td>

Return Addresses where one of the related AddressBoughtConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>boughtConnection_SOME</strong></td>
<td valign="top"><a href="#addressboughtconnectionwhere">AddressBoughtConnectionWhere</a></td>
<td>

Return Addresses where some of the related AddressBoughtConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldConnection_ALL</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td>

Return Addresses where all of the related AddressSoldConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldConnection_NONE</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td>

Return Addresses where none of the related AddressSoldConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldConnection_SINGLE</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td>

Return Addresses where one of the related AddressSoldConnections match this filter

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>soldConnection_SOME</strong></td>
<td valign="top"><a href="#addresssoldconnectionwhere">AddressSoldConnectionWhere</a></td>
<td>

Return Addresses where some of the related AddressSoldConnections match this filter

</td>
</tr>
</tbody>
</table>

### DistributionStatCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#distributionstatsort">DistributionStatSort</a>!]</td>
<td>

Specify one or more DistributionStatSort objects to sort DistributionStats by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatSort

Fields to sort DistributionStats by. The order in which sorts are applied is not guaranteed when specifying many fields in one DistributionStatSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### DistributionStatWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#distributionstatwhere">DistributionStatWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#distributionstatwhere">DistributionStatWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#distributionstatwhere">DistributionStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>total_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>minNonZero_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mean_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stdev_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#numberaggregatesort">NumberAggregateSort</a>!]</td>
<td>

Specify one or more NumberAggregateSort objects to sort NumberAggregates by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateSort

Fields to sort NumberAggregates by. The order in which sorts are applied is not guaranteed when specifying many fields in one NumberAggregateSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### NumberAggregateWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#numberaggregatewhere">NumberAggregateWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#numberaggregatewhere">NumberAggregateWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#numberaggregatewhere">NumberAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>sum_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>average_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>min_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>max_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregatesort">TransactionAddressTypeAggregateSort</a>!]</td>
<td>

Specify one or more TransactionAddressTypeAggregateSort objects to sort TransactionAddressTypeAggregates by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateSort

Fields to sort TransactionAddressTypeAggregates by. The order in which sorts are applied is not guaranteed when specifying many fields in one TransactionAddressTypeAggregateSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionAddressTypeAggregateWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionaddresstypeaggregatewhere">TransactionAddressTypeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#addresstype">AddressType</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type_IN</strong></td>
<td valign="top">[<a href="#addresstype">AddressType</a>]</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionConnectInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectfieldinput">TransactionFrom_addressConnectFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#transactionto_addressconnectfieldinput">TransactionTo_addressConnectFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionConnectWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#transactioncountsort">TransactionCountSort</a>!]</td>
<td>

Specify one or more TransactionCountSort objects to sort TransactionCounts by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountSort

Fields to sort TransactionCounts by. The order in which sorts are applied is not guaranteed when specifying many fields in one TransactionCountSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCountWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactioncountwhere">TransactionCountWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactioncountwhere">TransactionCountWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactioncountwhere">TransactionCountWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#transactionfrom_addressfieldinput">TransactionFrom_addressFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#transactionto_addressfieldinput">TransactionTo_addressFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionDeleteInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#transactionfrom_addressdeletefieldinput">TransactionFrom_addressDeleteFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#transactionto_addressdeletefieldinput">TransactionTo_addressDeleteFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionDisconnectInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#transactionfrom_addressdisconnectfieldinput">TransactionFrom_addressDisconnectFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#transactionto_addressdisconnectfieldinput">TransactionTo_addressDisconnectFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#transactionedgeaggregatesort">TransactionEdgeAggregateSort</a>!]</td>
<td>

Specify one or more TransactionEdgeAggregateSort objects to sort TransactionEdgeAggregates by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateSort

Fields to sort TransactionEdgeAggregates by. The order in which sorts are applied is not guaranteed when specifying many fields in one TransactionEdgeAggregateSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionEdgeAggregateWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionedgeaggregatewhere">TransactionEdgeAggregateWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionfrom_addressaggregateinput">TransactionFrom_addressAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionfrom_addressaggregateinput">TransactionFrom_addressAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionfrom_addressaggregateinput">TransactionFrom_addressAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionfrom_addressnodeaggregationwhereinput">TransactionFrom_addressNodeAggregationWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressConnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addressconnectwhere">AddressConnectWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top"><a href="#addressconnectinput">AddressConnectInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>overwrite</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not to overwrite any matching relationship with the new properties.

</td>
</tr>
</tbody>
</table>

### TransactionFrom_addressConnectionSort

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresssort">AddressSort</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressConnectionWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressCreateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresscreateinput">AddressCreateInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressDeleteFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top"><a href="#addressdeleteinput">AddressDeleteInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressDisconnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top"><a href="#addressdisconnectinput">AddressDisconnectInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top"><a href="#transactionfrom_addresscreatefieldinput">TransactionFrom_addressCreateFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectfieldinput">TransactionFrom_addressConnectFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressNodeAggregationWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionfrom_addressnodeaggregationwhereinput">TransactionFrom_addressNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionfrom_addressnodeaggregationwhereinput">TransactionFrom_addressNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionfrom_addressnodeaggregationwhereinput">TransactionFrom_addressNodeAggregationWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressUpdateConnectionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addressupdateinput">AddressUpdateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionFrom_addressUpdateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top"><a href="#transactionfrom_addresscreatefieldinput">TransactionFrom_addressCreateFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectfieldinput">TransactionFrom_addressConnectFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#transactionfrom_addressupdateconnectioninput">TransactionFrom_addressUpdateConnectionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top"><a href="#transactionfrom_addressdeletefieldinput">TransactionFrom_addressDeleteFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top"><a href="#transactionfrom_addressdisconnectfieldinput">TransactionFrom_addressDisconnectFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#transactionsort">TransactionSort</a>!]</td>
<td>

Specify one or more TransactionSort objects to sort Transactions by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionRelationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#transactionfrom_addresscreatefieldinput">TransactionFrom_addressCreateFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#transactionto_addresscreatefieldinput">TransactionTo_addressCreateFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionSort

Fields to sort Transactions by. The order in which sorts are applied is not guaranteed when specifying many fields in one TransactionSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressAggregateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionto_addressaggregateinput">TransactionTo_addressAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionto_addressaggregateinput">TransactionTo_addressAggregateInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionto_addressaggregateinput">TransactionTo_addressAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#transactionto_addressnodeaggregationwhereinput">TransactionTo_addressNodeAggregationWhereInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressConnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#addressconnectwhere">AddressConnectWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top"><a href="#addressconnectinput">AddressConnectInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>overwrite</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not to overwrite any matching relationship with the new properties.

</td>
</tr>
</tbody>
</table>

### TransactionTo_addressConnectionSort

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresssort">AddressSort</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressConnectionWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressCreateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addresscreateinput">AddressCreateInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressDeleteFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top"><a href="#addressdeleteinput">AddressDeleteInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressDisconnectFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top"><a href="#addressdisconnectinput">AddressDisconnectInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top"><a href="#transactionto_addresscreatefieldinput">TransactionTo_addressCreateFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top"><a href="#transactionto_addressconnectfieldinput">TransactionTo_addressConnectFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressNodeAggregationWhereInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionto_addressnodeaggregationwhereinput">TransactionTo_addressNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionto_addressnodeaggregationwhereinput">TransactionTo_addressNodeAggregationWhereInput</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionto_addressnodeaggregationwhereinput">TransactionTo_addressNodeAggregationWhereInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_EQUAL</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_AVERAGE_LENGTH_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_LONGEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address_SHORTEST_LENGTH_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressUpdateConnectionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#addressupdateinput">AddressUpdateInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionTo_addressUpdateFieldInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>where</strong></td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>create</strong></td>
<td valign="top"><a href="#transactionto_addresscreatefieldinput">TransactionTo_addressCreateFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>connect</strong></td>
<td valign="top"><a href="#transactionto_addressconnectfieldinput">TransactionTo_addressConnectFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>update</strong></td>
<td valign="top"><a href="#transactionto_addressupdateconnectioninput">TransactionTo_addressUpdateConnectionInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>delete</strong></td>
<td valign="top"><a href="#transactionto_addressdeletefieldinput">TransactionTo_addressDeleteFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>disconnect</strong></td>
<td valign="top"><a href="#transactionto_addressdisconnectfieldinput">TransactionTo_addressDisconnectFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_ADD</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_SUBTRACT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_DIVIDE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_MULTIPLY</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#transactionfrom_addressupdatefieldinput">TransactionFrom_addressUpdateFieldInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#transactionto_addressupdatefieldinput">TransactionTo_addressUpdateFieldInput</a></td>
<td></td>
</tr>
</tbody>
</table>

### TransactionWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#transactionwhere">TransactionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#transactionwhere">TransactionWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#transactionwhere">TransactionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_IN</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_CONTAINS</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_STARTS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_hash_ENDS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_number_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_price_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gas_used_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_IN</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_CONTAINS</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_STARTS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hash_ENDS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_IN</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_CONTAINS</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_STARTS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>input_ENDS_WITH</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_fee_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>transaction_index_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_IN</strong></td>
<td valign="top">[<a href="#float">Float</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_LT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_LTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_GT</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value_GTE</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_IN</strong></td>
<td valign="top">[<a href="#datetime">DateTime</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_LT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_LTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_GT</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>block_timestamp_GTE</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_address</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_address_NOT</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_addressAggregate</strong></td>
<td valign="top"><a href="#transactionfrom_addressaggregateinput">TransactionFrom_addressAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_address_NOT</strong></td>
<td valign="top"><a href="#addresswhere">AddressWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_addressAggregate</strong></td>
<td valign="top"><a href="#transactionto_addressaggregateinput">TransactionTo_addressAggregateInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_addressConnection</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_addressConnection_NOT</strong></td>
<td valign="top"><a href="#transactionfrom_addressconnectionwhere">TransactionFrom_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_addressConnection</strong></td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>to_addressConnection_NOT</strong></td>
<td valign="top"><a href="#transactionto_addressconnectionwhere">TransactionTo_addressConnectionWhere</a></td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatCreateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>sort</strong></td>
<td valign="top">[<a href="#volumestatsort">VolumeStatSort</a>!]</td>
<td>

Specify one or more VolumeStatSort objects to sort VolumeStats by. The sorts will be applied in the order in which they are arranged in the array.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>limit</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offset</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatSort

Fields to sort VolumeStats by. The order in which sorts are applied is not guaranteed when specifying many fields in one VolumeStatSort object.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#sortdirection">SortDirection</a></td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatUpdateInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_INCREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_DECREMENT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

### VolumeStatWhere

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>OR</strong></td>
<td valign="top">[<a href="#volumestatwhere">VolumeStatWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>AND</strong></td>
<td valign="top">[<a href="#volumestatwhere">VolumeStatWhere</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>NOT</strong></td>
<td valign="top"><a href="#volumestatwhere">VolumeStatWhere</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>year_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>month_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>day_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_IN</strong></td>
<td valign="top">[<a href="#int">Int</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_LTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GT</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>count_GTE</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

## Enums

### AddressType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>eoa</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>contract</strong></td>
<td></td>
</tr>
</tbody>
</table>

### SortDirection

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ASC</strong></td>
<td>

Sort by field values in ascending order.

</td>
</tr>
<tr>
<td valign="top"><strong>DESC</strong></td>
<td>

Sort by field values in descending order.

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

A date and time, represented as an ISO-8601 string

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

