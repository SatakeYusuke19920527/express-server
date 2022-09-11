# AKSデプロイ手順
1. リソースグループ作成
2. Docker image作成
3. Azure Container Registoryへimageをpush
4. Azure Kubernetes Serviceを作成
az network vnet create \
    --resource-group myResourceGroup \
    --name myAKSVnet \
    --address-prefixes 192.168.0.0/16 \
    --subnet-name myAKSSubnet \
    --subnet-prefix 192.168.0.0/24

set SUBNET_ID $(az network vnet subnet show --resource-group myResourceGroup --vnet-name myAKSVnet --name myAKSSubnet --query id -o tsv)

az aks create \
    --resource-group myResourceGroup \
    --name myAKSCluster \
    --node-count 2 \
    --generate-ssh-keys \
    --attach-acr satakeacr

az aks create \
    --resource-group myResourceGroup \
    --name myAKSCluster \
    --node-count 2 \
    --network-plugin kubenet \
    --vnet-subnet-id $SUBNET_ID \
    --generate-ssh-keys \
    --attach-acr satakeacr