package com.elements.elementdistributions.dto;

import com.elements.elementdistributions.entity.BrandDao;
import com.elements.elementdistributions.entity.CategoryDao;

import java.util.List;

/**
 * Created by asp5045 on 11/17/16.
 */
public class MenuDto {

    private List<CategoryDao> categoryDtoList;
    private List<BrandDao> webBrandDtoList;
    private List<BrandDao> eLiquidBrandList;
//    private List<ModelDao> modelDtoList;

    public List<CategoryDao> getCategoryDtoList() {
        return categoryDtoList;
    }

    public void setCategoryDtoList(List<CategoryDao> categoryDtoList) {
        this.categoryDtoList = categoryDtoList;
    }

    public List<BrandDao> getWebBrandDtoList() {
        return webBrandDtoList;
    }

    public void setWebBrandDtoList(List<BrandDao> webBrandDtoList) {
        this.webBrandDtoList = webBrandDtoList;
    }

    //    public List<WebBrandDto> getWebBrandDtoList() {
//        return webBrandDtoList;
//    }
//
//    public void setWebBrandDtoList(List<WebBrandDto> webBrandDtoList) {
//        this.webBrandDtoList = webBrandDtoList;
//    }

    public List<BrandDao> geteLiquidBrandList() {
        return eLiquidBrandList;
    }

    public void seteLiquidBrandList(List<BrandDao> eLiquidBrandList) {
        this.eLiquidBrandList = eLiquidBrandList;
    }

    //    public List<WebBrandDto> geteLiquidBrandList() {
//        return eLiquidBrandList;
//    }
//
//    public void seteLiquidBrandList(List<WebBrandDto> eLiquidBrandList) {
//        this.eLiquidBrandList = eLiquidBrandList;
//    }

    //    public List<ModelDao> getModelDtoList() {
//        return modelDtoList;
//    }
//
//    public void setModelDtoList(List<ModelDao> modelDtoList) {
//        this.modelDtoList = modelDtoList;
//    }
}
