package com.elements.elementdistributions.dto;

import com.elements.elementdistributions.entity.CategoryDao;
import com.elements.elementdistributions.entity.ModelDao;

import java.util.List;

/**
 * Created by asp5045 on 11/17/16.
 */
public class MenuDto {

    private List<CategoryDao> categoryDtoList;
    private List<WebBrandDto> webBrandDtoList;
    private List<ModelDao> modelDtoList;

    public List<CategoryDao> getCategoryDtoList() {
        return categoryDtoList;
    }

    public void setCategoryDtoList(List<CategoryDao> categoryDtoList) {
        this.categoryDtoList = categoryDtoList;
    }

    public List<WebBrandDto> getWebBrandDtoList() {
        return webBrandDtoList;
    }

    public void setWebBrandDtoList(List<WebBrandDto> webBrandDtoList) {
        this.webBrandDtoList = webBrandDtoList;
    }

    public List<ModelDao> getModelDtoList() {
        return modelDtoList;
    }

    public void setModelDtoList(List<ModelDao> modelDtoList) {
        this.modelDtoList = modelDtoList;
    }
}
