import React from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import Label from "components/Label/Label";

const DashboardSubmitPost = () => {
  return (
    <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
      <form className="grid md:grid-cols-2 gap-6" action="#" method="post">
        <label className="block md:col-span-2">
          <Label>Post Title *</Label>

          <Input type="text" className="mt-1" />
        </label>
        <label className="block md:col-span-2">
          <Label>Post Appendix</Label>

          <Textarea className="mt-1" rows={4} />
          <p className="mt-1 text-sm text-neutral-500">
            A brief summary of your article
          </p>
        </label>
        <label className="block">
          <Label>Category</Label>

          <Select className="mt-1">
            <option selected disabled>Select Category</option>
            <optgroup label="Popular Categories">
              <option value="Crypto Currency">Crypto Currency</option>
              <option value="MetaVerse">MetaVerse</option>
              <option value="NFT">NFT</option>
            </optgroup>
            <optgroup label="All Categories">
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
              <option value="Category 5">Category 5</option>
              <option value="Category 6">Category 6</option>
              <option value="Category 7">Category 7</option>
              <option value="Category 8">Category 8</option>
              <option value="Category 9">Category 9</option>
              <option value="Category 10">Category 10</option>
            </optgroup>
          </Select>
        </label>
        <label className="block">
          <Label>Tags</Label>

          <Input type="text" className="mt-1" />
        </label>

        <div className="block md:col-span-2">
          <Label>Featured Image</Label>

          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-neutral-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="flex flex-col sm:flex-row text-sm text-neutral-6000">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-neutral-500">
                PNG, JPG, GIF up to 2MB
              </p>
            </div>
          </div>
        </div>
        <label className="block md:col-span-2">
          <Label> Post Content</Label>

          <Textarea className="mt-1" rows={16} />
        </label>

        <ButtonPrimary className="md:col-span-2" type="submit">
          Submit post
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default DashboardSubmitPost;
