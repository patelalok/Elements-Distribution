package com.elements.elementdistributions.entity;

import javax.persistence.*;

/**
 * Created by apatel2 on 9/29/17.
 */
@Entity
@Table(name = "product_inventory")
public class ProductInventoryDao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int productId;
    private String productNo;
//    private int vendorId;
    private double cost;
    private double retail;
    private double tier1;
    private double tier2;
    private double tier3;
    private double markup;
    private int quantity;
    private String createdTimestamp;
    private String lastUpdatedTimestamp;
    private String username;

    @Transient
    private int totalQuantity;

    @Transient
    private boolean variant;

    @Transient
    private int purchasedOrderQuanity;

    @Transient
    private int orderId;

    @Transient
    private int vendorId;


//    @Transient
//    private String vendorName;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductNo() {
        return productNo;
    }

    public void setProductNo(String productNo) {
        this.productNo = productNo;
    }

//    public int getVendorId() {
//        return vendorId;
//    }
//
//    public void setVendorId(int vendorId) {
//        this.vendorId = vendorId;
//    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public double getRetail() {
        return retail;
    }

    public void setRetail(double retail) {
        this.retail = retail;
    }

    public double getTier1() {
        return tier1;
    }

    public void setTier1(double tier1) {
        this.tier1 = tier1;
    }

    public double getTier2() {
        return tier2;
    }

    public void setTier2(double tier2) {
        this.tier2 = tier2;
    }

    public double getTier3() {
        return tier3;
    }

    public void setTier3(double tier3) {
        this.tier3 = tier3;
    }

    public double getMarkup() {
        return markup;
    }

    public void setMarkup(double markup) {
        this.markup = markup;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(String createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(int totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public boolean isVariant() {
        return variant;
    }

    public void setVariant(boolean variant) {
        this.variant = variant;
    }

    public String getLastUpdatedTimestamp() {
        return lastUpdatedTimestamp;
    }

    public void setLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPurchasedOrderQuanity() {
        return purchasedOrderQuanity;
    }

    public void setPurchasedOrderQuanity(int purchasedOrderQuanity) {
        this.purchasedOrderQuanity = purchasedOrderQuanity;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }
}
